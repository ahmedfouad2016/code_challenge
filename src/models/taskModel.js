import Sequelize from 'sequelize';
import request from 'request';
import DriverModal from './driverModel';
import CourierModel from './courierModel';
import BaseModel from './baseModel';

class TaskModel extends BaseModel {

    constructor(_client) {
        super();
        this._task = null;
        this._driver = new DriverModal().getInstance().driver;
        this._courier = new CourierModel().getInstance().courier;
        this.initTaskSchema(_client).then(() => {
            this.getCount().then((count) => {
                 if (count == 0)
                     this.initTaskData();
            });
        });

    }

    initTaskSchema(_client) {
        const Task = _client.define('task', {
            toLocation: {
                type: Sequelize.STRING
            },
            fromLocation: {
                type: Sequelize.STRING
            },
            description:{
                type:Sequelize.TEXT
            },
            startedAt: {
                type: Sequelize.DATE
            },
            finishedAt: {
                type: Sequelize.DATE
            },
            deliveryDate:{
                type: Sequelize.DATEONLY
            },
            status: {
                type: Sequelize.ENUM,
                values: ['completed', 'pending','started' ,'failed']
            },
            driverComment:{
                type: Sequelize.TEXT
            }

        }, { freezeTableName: true });
        
        var Driver = this._driver;
        var Courier = this._courier;
        Task.belongsTo(Driver, { as: 'Driver', foreignKey: 'driverId' })
        Driver.hasMany(Task, { as: 'Tasks', foreignKey: 'driverId' });
        Task.belongsTo(Courier, { as: 'Courier', foreignKey: 'courierId' })
        Courier.hasMany(Task, { as : 'Tasks' ,foreignKey: 'courierId' });

        this._task = Task;
        return Task.sync();
    }

    async initTaskData() {
        var data = await super.getData();
        var tasks = [];
        var Driver = this._driver;
        var Courier = this._courier;
        for (let task of data.tasks) {
            let driver = await Driver.findOne({ where: { name: task.driverName } });
            let courier = await Courier.findOne({ where: { name: task.courier } });
            tasks.push({
                toLocation: task.toLocation,
                fromLocation: task.fromLocation,
                description: task.description,
                startedAt: task.startedAt,
                finishedAt: task.finishedAt,
                deliveryDate: task.deliveryDate,
                status: task.status,
                driverComment: task.driverComment,
                driverId: driver.get('id'),
                courierId: courier.get('id')
            });
        }

        this._task.bulkCreate(tasks);
    }

    getCount() {
        return this._task.count();
    }

    get task() {
        return this._task;
    }


}

class Singleton {

    constructor(_client) {

        if (!Singleton.instance) {
            Singleton.instance = new TaskModel(_client);
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

export default Singleton;
