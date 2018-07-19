import BaseController from '../controllers/baseController';

export default class TaskController extends BaseController {

    constructor(_client) {
      super(_client);
      
    }

    // retrive all data 
    index(){
        return this.task.all({ include:['Driver','Courier']});
    }

    getTask(id){
        return this.task.findOne({ where: { id } });
    }

    // edit data
    update(id,data){
        try {
            // validate fileds you want update exist in table
            let attributes = Object.keys(this.task.attributes);
            let keys = Object.keys(data);
            let check = keys.some(r => attributes.indexOf(r) >= 0);
            if (!check)
                throw new Error("you can't update un exists coulmn ");
            
            return this.task.update(data, { where: { id } });

        } catch (err) {
            console.error(err);
        }
    }

    search(query){
        return this.task.findAll({ where: {query} });
    }

    // delete data
    delete(id){

    }

    // save one or more recorde 
    save(data){

    }

}