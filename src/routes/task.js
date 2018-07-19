import TaskController from "../controllers/taskController";

const routes = (app, _client) => {

    let taskController = new TaskController(_client);

    app.route('/tasks')
        .get(async (req, res) => {
            taskController.index().then((data) => {
                res.json(data)
            });
        })

        .post((req, res) => {
            res.send('Post Request Successfuly !!')
        });

    app.route('/tasks/:taskId')
        .put((req, res) => {
            taskController.update(req.params.taskId, req.body).then((task)=>{
                res.send(task)
            });
        })

        .delete((req, res) => {
            res.send('Delete Request Successfuly !!')
        });

}

export default routes;
