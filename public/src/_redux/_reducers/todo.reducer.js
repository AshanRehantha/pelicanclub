"use strict";

import { todoConstants } from "../_constants";

const INITIAL_TODO_STATE = {
    list: null,
};

export function todoReducer (state = INITIAL_TODO_STATE, action){
    switch(action.type){
        case todoConstants.TODO_LIST_REQUEST:
            return {
                ...state,
                list: null,
            }
        case todoConstants.TODO_LIST_COMPLETE:
            return {
                ...state,
                list: action.payload,
            }    
        case todoConstants.TODO_LIST_ERROR:
            return {
                ...state,
            }  
        case todoConstants.NEW_REQUEST:
            return {
                list: null,
            }
        case todoConstants.NEW_COMPLETE:
            return {
                ...state,
                list: action.payload,
            }
        case todoConstants.NEW_ERROR:
            return {
                ...state,
            }
        case todoConstants.TODO_UPDATE_COMPLETE:
            return {
                ...state,
                list: action.payload,
            }
        case todoConstants.TODO_UPDATE_ERROR:
            return {
                ...state,
            }         
    }

    return state;
}