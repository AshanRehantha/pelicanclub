const { respondRequest, errorRespondReturn } = require("../../helper/respondcode.helper");
const logger = require("../../logger");
const { addNewTodo, getTodoList, updateTodoList } = require("./todo.repository");
const moment = require('moment');

async function todoAddController (req, res) {
    logger.info("Processing Method `/todo/todo.controller -> add new todo`");
    await addNewTodo(req.body).then((result) => {
        return res.status(result.respondCode).send({
            data:respondRequest(result.status.statusCode, result.status.message, 
                result.data.map(function(item){ 
                    return {
                        id:item._id,
                        status:item.status,
                        task:item.task,
                        date:moment(item.createdAt).format('ll')
                    } 
                })
            )
        })
    }).catch((err) => {
        return res.status(400).send({
            data:errorRespondReturn(4000, null, err)
        });
    })
}

async function todoListController (req, res) {
    logger.info("Processing Method `/todo/todo.controller -> add new todo`");
    await getTodoList(req.body).then((result) => {
        return res.status(result.respondCode).send({
            data:respondRequest(result.status.statusCode, result.status.message, 
                result.data.map(function(item){ 
                    return {
                        id:item._id,
                        status:item.status,
                        task:item.task,
                        date:moment(item.createdAt).format('ll')
                    } 
                })
            )
        })
    }).catch((err) => {
        return res.status(400).send({
            data:errorRespondReturn(4000, null, err)
        });
    })
} 

async function todoUpdateController (req, res) {
    logger.info("Processing Method `/todo/todo.controller -> update todo`");
    await updateTodoList(req.body).then((result) => {
        return res.status(result.respondCode).send({
            data:respondRequest(result.status.statusCode, result.status.message, 
                result.data.map(function(item){ 
                    return {
                        id:item._id,
                        status:item.status,
                        task:item.task,
                        date:moment(item.createdAt).format('ll')
                    } 
                })
            )
        })
    }).catch((err) => {
        return res.status(400).send({
            data:errorRespondReturn(4000, null, err)
        });
    })
}


module.exports = {
    todoAddController,
    todoListController,
    todoUpdateController
}