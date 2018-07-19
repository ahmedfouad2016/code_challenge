import request from 'request';


class BaseModel {
    
    constructor(){

    }

    getData(){
        return new Promise((resolve, reject) =>{
            request.get('https://api.myjson.com/bins/b9ix6', (err, res) => {
                try {
                    if (err)
                        throw err;
                    var data = JSON.parse(res.body);
                    resolve(data);
                } catch (error) {
                    reject(error);
                    console.error(error);
                }
            });   
        });
    }

}

export default BaseModel;