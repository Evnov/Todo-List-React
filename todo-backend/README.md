# BACKEND PACKAGE

============================

## 启动

- **nodemon index.js**

## npm init -y

## npm install expree body-parser mongoose --save

- ExpressJS - is the server framework with Node JS under the hood.
- body-parser - allows express to parse the request payload into the req.body object. More about this later.
- mongoose - high level API for interacting with our MongoDB database.

## index.js

- store our server initialization logic

## connect mongodb data folder

- cd ~
- 启动数据库 **mongodb/bin/mongod --dbpath=/Users/evii/mongodb-data**
- Failed to set up listener 解决方法：https://blog.csdn.net/songrenqing/article/details/80629832
  - lsof -i :27017 找到进程号 PID
  - kill -9 PID 杀死进程

## Establish API endpoints

- GET /todos :getting
- POST /todos :adding
- PUT /todos :updating with matched id
- DELETE /todos :deleting with matched id

## npm i cors

- allow cross somain http request. In other words, without enabling cors on the backend, even Axios will not able to send our request to the API.

# FRONTEND PACKAGE

==========================

## 启动

- **npm start**

## npm i axios

- allow us to sent http request from our react frontend to our todo

## npm install @material-ui/icons


