"use strict";

import { respondCode } from "../_redux/_constants";

const customErrorMessage = (errorRespond) => {
        /** Auth Error Messages */
    if(errorRespond.statusCode != undefined){
        if(errorRespond.statusCode == respondCode.NEW_TODO_UNSUCESS){
            errorRespond.message = "Email already exists"
        }
        if(errorRespond.statusCode == respondCode.TODO_QUERY_ERROR){
            errorRespond.message = "User name already exists"
        }
    }
    return errorRespond
}

const customSucessMessage = (sucessRespond) => {
    if(sucessRespond.statusCode == respondCode.NEW_TODO_SUCESS){
        sucessRespond.message = "You’r password change request has been send please check the email and reset your password."
    }
    if(sucessRespond.statusCode == respondCode.TODO_UPDATE_SUCESS){
        sucessRespond.message = null;
    }

    return sucessRespond
}

export {
    customErrorMessage,
    customSucessMessage
}