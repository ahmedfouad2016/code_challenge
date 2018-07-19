# Code Challange


## Getting Started

This is code challange task that descripe working with carriers and merchants to facilitate managing and tracking the shipping process.

### Prerequisites

You will need Nodejs v10 , npm v6 , mysql


### Installing

You will need to install node modules dependencies

```
npm install 
```
To start server running

```
npm start
```

Note: you will need to change configuration in ./src/config/index.js to be suitable with your environment 

## Running the tests

The test implemented with jasmine, you will find the test in spec folder
To run the test 

```
npm test
```


### Project Configuration

```
// server Config
const SERVER_PORT = 3000;


// Mysql config
const MYSQL_DATABASE = 'your_db_name';
const MYSQL_USER='your_user';
const MYSQL_PASSWORD='your_password';
const MYSQL_PORT = 8889;
const MYSQL_HOST='localhost';

```
### Database 
You will find the database in  ./database/database.sql.

Note: you don't need to import the database file , all you need to create database for project.
the schema and data will auto genrated when server start

