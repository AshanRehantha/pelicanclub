const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const ToDoRouter = require('./router/todo.router');

const api_prifix = process.env.API_PRFIX;

const whitelist = process.env.CORS_OPTIONS_ORIGIN;


//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            console.log("ojk");
            callback(null, true)
        }
    },
    credentials: true,
    exposedHeaders:['Set-Cookie'],
    methods:process.env.CORS_OPTIONS_METHODS
  }


app.use(cors(corsOptions));

//Routers
app.use(`${api_prifix}/todo`, ToDoRouter);

module.exports = app;