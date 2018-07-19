import path from 'path';
import task from "./task";
const routes = (app, _client) => {


    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/src/views/index.html'));
    });

    app.get('/home', (req, res) => {
        res.sendFile(path.join(__dirname + '/src/views/index.html'));
    });

   task(app,_client);

}

export default routes;
