import Sequelize from 'sequelize';
import BaseModel from './baseModel';

class DriverModel extends BaseModel {

    constructor(_client){
        super();
        this._driver = null;
        this.initDriverSchema(_client).then(()=>{
            this.getCount().then((count) => {
                if (count == 0)
                    this.iniDriverData();
            }); 
        });
                  
    }

    initDriverSchema(_client) {
        const Driver =  _client.define('driver', {
            name: {
                type: Sequelize.STRING
            },
            mobile: {
                type: Sequelize.STRING
            }
        }, { freezeTableName: true });
        this._driver = Driver;
        return Driver.sync();
    }

    async iniDriverData(){  
        
        var data = await super.getData();
        var names = new Set();
        // loop and add data as object to set. 
        for (let task of data.tasks) {
            //stringfy the object to set be able to remove dublication
            names.add(`{ "name": "${task.driverName}" }`);
        }

        // convert set to be array &&& stringfy the array to become json array of objects
        this._driver.bulkCreate(JSON.parse('[' + [...names].join(',') + ']'),
            { fields: ['name'] });
            
    }

    getCount(){
        return this._driver.count();
    }

    get driver(){
        return this._driver;
    }


}

class Singleton {

    constructor(_client){
        
        if (!Singleton.instance){
            Singleton.instance = new DriverModel(_client);
        }
    }

    getInstance(){
        return Singleton.instance;
    }
}

export default Singleton;
