'use strict'

import { todoConstants } from "../_constants"

export const todoListRequest = (payload) => {
    return {
        type: todoConstants.TODO_LIST_REQUEST,
        payload,
    }
}

export const todoListCompleted = (payload) => {
    return {
        type: todoConstants.TODO_LIST_COMPLETE,
        payload,
    }
}

export const todoListError = (payload) => {
    return {
        type: todoConstants.TODO_LIST_ERROR,
        payload,
    }
}

export const newTodoRequest = (payload) => {
    return {
        type: todoConstants.NEW_REQUEST,
        payload,
    }
}

export const newTodoCompleted = (payload) => {
    return {
        type: todoConstants.NEW_COMPLETE,
        payload,
    }
}

export const newTodoError = (payload) => {
    return {
        type: todoConstants.NEW_ERROR,
        payload,
    }
}

export const TodoUpdateRequest = (payload) => {
    return {
        type: todoConstants.TODO_UPDATE_REQUEST,
        payload,
    }
}

export const TodoUpdateCompleted = (payload) => {
    return {
        type: todoConstants.TODO_UPDATE_COMPLETE,
        payload,
    }
}

export const TodoUpdateError = (payload) => {
    return {
        type: todoConstants.TODO_UPDATE_ERROR,
        payload,
    }
}