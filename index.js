import express from "express";
import bodyParser from "body-parser";
import { SERVER_PORT , MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } from "./src/config";
import routes from "./src/routes";
import Sequelize from 'sequelize';
import path  from "path";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/src/views')));
app.use(cors());
app.use(helmet());

const sequelize = new Sequelize({
    database: MYSQL_DATABASE,
    username: MYSQL_USER,
    port: MYSQL_PORT,
    host: MYSQL_HOST,
    password: MYSQL_PASSWORD,
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


routes(app, sequelize);


app.listen(SERVER_PORT, () => {
    console.log(`App is Running on Port ${SERVER_PORT}`);
})