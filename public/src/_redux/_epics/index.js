"use strict";

import { combineEpics } from "redux-observable";

import {
    todoListEpic,
    addnewtodoEpic,
    updateTodoEpic
} from './todo.epic';

export default combineEpics(
    todoListEpic,
    addnewtodoEpic,
    updateTodoEpic
)