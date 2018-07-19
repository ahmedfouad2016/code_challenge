import Sequelize from 'sequelize';
import BaseModel from './baseModel';

class CourierModel extends BaseModel {

    constructor(_client) {
        super();
        this._courier = null;
        this.initCourierSchema(_client).then(() => {
            this.getCount().then((count) => {
                if (count == 0)
                    this.initCourierData();
            });
        });

    }

    initCourierSchema(_client) {
        const Courier = _client.define('courier', {
            name: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            }
        }, { freezeTableName: true});
        this._courier = Courier;
        return Courier.sync();
    }

    async initCourierData() {
        var data = await super.getData();
        var couriers = new Set();
        // loop and add data as object to set. 
        for (let task of data.tasks) {
            //stringfy the object to set be able to remove dublication
            couriers.add(`{ "name": "${task.courier}" }`);
        }

        // convert set to be array &&& stringfy the array to become json array of objects
        this._courier.bulkCreate( JSON.parse('[' + [...couriers].join(',') + ']'), 
            { fields: ['name'] });

    }

    getCount() {
        return this._courier.count();
    }

    get courier() {
        return this._courier;
    }


}

class Singleton {

    constructor(_client) {

        if (!Singleton.instance) {
            Singleton.instance = new CourierModel(_client);
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

export default Singleton;
