
import DriverModel from "../models/driverModel";
import CourierModel from "../models/courierModel";
import TaskModel from '../models/taskModel';

export default class BaseController {

    constructor(_client){
        this._driver = new DriverModel(_client).getInstance().driver;
        this._courier = new CourierModel(_client).getInstance().courier;
        this._task  = new TaskModel(_client).getInstance().task;
    }

    get task(){
        return this._task;
    }

    get driver(){
        return this._driver;
    }

    get courier(){
        return this._courier;
    }

}