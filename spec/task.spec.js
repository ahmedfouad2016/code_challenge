import  request  from 'request';
import TaskController from "../src/controllers/taskController";
import client from "../src/config/db";

describe("check tasks api working well ", () => {

    it("should /tasks  api retrive data ", (done) => {
        request.get('http://localhost:3000/tasks',(err,res) => {
            expect(JSON.parse(res.body).length).toBeGreaterThan(0);
            done();
        });
    });

});


describe("check tasks Controller working well ", () => {

    it("should index not empty ", (done) => {
        let task = new TaskController(client);
        task.index().then((data) => {
            expect(data.length).toBeGreaterThan(0);
            done()
        });
    });

});