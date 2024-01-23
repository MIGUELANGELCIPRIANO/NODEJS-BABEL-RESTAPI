# NODEJS-BABEL-RESTAPI

<img width="50%" src="https://i.postimg.cc/yY8x2SjD/NODEJS-POSTGRESQL-BABEL-REST-API.png" />

## INTRODUCTION

In this project we will create a **Node.js** REST API using **Sequelize**, as ORM, and **PostgreSQL**, as relational database, for query execution and table creation. <br>
The REST API will have a project endpoint and each project in turn will consist of different tasks, establishing a one-to-many (1:N) relationship. <br>
In addition we will use **Babel** as a JavaScript transcompiler.

## TECHNOLOGIES

- Node.js
- Sequelize
- Express.js
- PostgreSQL
- Babel

## INSTALLATION

1. Install the recommended version for most users of **Node.js** from the following link.

https://nodejs.org/en

2. Install the latest stable version of **PostgreSQL** from the following link.

https://www.postgresql.org/

3. Use the **npm** package manager to install.
4. Execute the command from the terminal located at ./NODEJS-BABEL-RESTAPI.

```shell
npm i
```

5. Create a database using the commands found inside the sql folder in the db.sql file.
6. Create an .env file inside ./NODEJS-BABEL-RESTAPI and replace `userpostgres` and `passwordpostgres` with your credentials.

```js
DB_NAME = secondapi
DB_USER = userpostgres
DB_PASSWORD = passwordpostgres
```

## EXECUTION

7. Use the **npm** package manager to run.
8. Execute the commands from the terminal located at ./NODEJS-BABEL-RESTAPI.
9. To run the server using babel-node use the command.

```shell
npm run dev
```

10. To create a copy of the server translated by **Babel** use the command.

```shell
npm run build
```

11. To run the server translated by **Babel** use the command.

```shell
npm start
```
