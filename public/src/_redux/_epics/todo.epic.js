"use strict";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { mergeMap, catchError, concatMap } from "rxjs/operators";
import { getRequestHeader } from "../../_helpers/request.header";

import { todoConstants } from "../_constants";
import { newTodoCompleted, newTodoError, todoListCompleted, todoListError, TodoUpdateCompleted, TodoUpdateError } from "../_actions";
import { ajaxError, ajaxSucess } from "../_actions/message.action";
import { push } from "connected-react-router";

export const todoListEpic = (actions$) =>
    actions$.pipe(
        ofType(todoConstants.TODO_LIST_REQUEST),
        mergeMap((action) => {
            return ajax
                .post(
                    "/api/v1/todo/list",
                    action.payload,
                    getRequestHeader("POST"),
                ).pipe(
                    concatMap((ajaxResponse) => 
                        of(
                            todoListCompleted(ajaxResponse.response.data.respond.data),
                        ),
                    ),
                    catchError((error) => of(todoListError(error), ajaxError(error))),
                );
        })
    )

export const addnewtodoEpic = (actions$) =>
    actions$.pipe(
        ofType(todoConstants.NEW_REQUEST),
        mergeMap((action) => {
            return ajax
                .post(
                    "/api/v1/todo/add",
                    action.payload,
                    getRequestHeader("POST"),
                ).pipe(
                    concatMap((ajaxResponse) => 
                        of(
                            newTodoCompleted(ajaxResponse.response.data.respond.data),
                        ),
                    ),
                    catchError((error) => of(newTodoError(error), ajaxError(error))),
                );
        })
    )  
export const updateTodoEpic = (actions$) =>
    actions$.pipe(
        ofType(todoConstants.TODO_UPDATE_REQUEST),
        mergeMap((action) => {
            return ajax
                .post(
                    "/api/v1/todo/update",
                    action.payload,
                    getRequestHeader("POST"),
                ).pipe(
                    concatMap((ajaxResponse) => 
                        of(
                            TodoUpdateCompleted(ajaxResponse.response.data.respond.data),
                        ),
                    ),
                    catchError((error) => of(TodoUpdateError(error), ajaxError(error))),
                );
        })
    ) 
    