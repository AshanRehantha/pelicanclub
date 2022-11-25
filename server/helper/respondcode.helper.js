function serverRespondCode(){
    const code = {
        //all sucess code
        'sucess_code':00,
        'new_todo_create_sucess':3001,
        'todo_update_sucess':3002,


        //todo respond code 3200 to 
        'new_todo_create_unsucess':3201,

        //query error 4100 to
        'todo_create_query_error':4100,

    }
    return code;
}

function errorRespondReturn(statuscode, message, error){
    return {
        statusCode:statuscode,
        respond:{
            'message':message == null ? "We are sorry, things don’t appear to be working at the moment. Please try again later." : message,
            'error':error,
        }
    }
}

function respondRequest(statusCode, message, data){
    return{
        statusCode:statusCode,
        respond:{
            'status':{
                'message': message,
                'statusCode':statusCode,
            },
            'data':data == undefined ? '' : data
        }
    }
}

module.exports = {
    serverRespondCode,
    errorRespondReturn,
    respondRequest,
}