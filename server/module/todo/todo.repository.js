const { Todo } = require("./todo.model");
const { serverRespondCode } = require('../../helper/respondcode.helper');
const logger = require("../../logger");

async function addNewTodo(req) {
    try {
        let newTodo = new Todo({
            task: req.new_todo,
            status: "Open"
        })
        return await newTodo.save().then(() => {
            return Todo.find({},).then((result) => {
                return{
                    respondCode:200,
                    status:{
                        'statusCode':serverRespondCode().new_todo_create_sucess,
                        'message':'todo_create_sucess',
                        'errorDetails':{}
                    },
                    data:result
                }
            })
        }).catch((err) => {
            logger.error(err)
            return {
                respondCode:400,
                statusCode:serverRespondCode().todo_create_query_error,
                message:'query error'
            }
        })
    }catch(err) {
        logger.error(err)
        return {
            respondCode:400,
            statusCode:serverRespondCode().todo_create_query_error,
            message:'query error'
        }
    }
}

async function getTodoList(req) {
    try {
        return await Todo.find({},).then((result) => {
            return{
                respondCode:200,
                status:{
                    'statusCode':serverRespondCode().new_todo_create_sucess,
                    'message':'todo_create_sucess',
                    'errorDetails':{}
                },
                data:result
            }
        }).catch((err) => {
            logger.error(err)
            return {
                respondCode:400,
                statusCode:serverRespondCode().todo_create_query_error,
                message:'query error'
            }
        })
    }catch(err) {
        logger.error(err)
        return {
            respondCode:400,
            statusCode:serverRespondCode().todo_create_query_error,
            message:'query error'
        }
    }
}

async function updateTodoList(req) {
    try {
        if(req.type == "update"){
            const update_feild = {
                status: "Done"
            }
            return Todo.findByIdAndUpdate({_id: req.id}, update_feild).then(() => {
                return Todo.find({},).then((result) => {
                    return{
                        respondCode:200,
                        status:{
                            'statusCode':serverRespondCode().todo_update_sucess,
                            'message':'todo_create_sucess',
                            'errorDetails':{}
                        },
                        data:result
                    }
                }).catch((err) => {
                    return {
                        respondCode:400,
                        statusCode:serverRespondCode().todo_create_query_error,
                        message:'query error'
                    }
                })
            }).catch((err) => {
                    return {
                        respondCode:400,
                        statusCode:serverRespondCode().todo_create_query_error,
                        message:'query error'
                    }
            })
        }
        if(req.type == "delete"){
            return Todo.findByIdAndDelete({_id: req.id}).then(() => {
                return Todo.find({},).then((result) => {
                    return{
                        respondCode:200,
                        status:{
                            'statusCode':serverRespondCode().todo_update_sucess,
                            'message':'todo_create_sucess',
                            'errorDetails':{}
                        },
                        data:result
                    }
                }).catch((err) => {
                    return {
                        respondCode:400,
                        statusCode:serverRespondCode().todo_create_query_error,
                        message:'query error'
                    }
                })
            }).catch((err) => {
                return {
                    respondCode:400,
                    statusCode:serverRespondCode().todo_create_query_error,
                    message:'query error'
                }
            })
        }
    }catch(err) {
        return {
            respondCode:400,
            statusCode:serverRespondCode().todo_create_query_error,
            message:'query error'
        }
    }
}



module.exports = {
    addNewTodo,
    getTodoList,
    updateTodoList
}