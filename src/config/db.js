import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER }  from './index';
import Sequelize from 'sequelize';


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

export default sequelize;