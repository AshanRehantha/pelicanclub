"use strict";

import { todoReducer } from "./todo.reducer";
import { loadingSpinnerReducer } from "./loading.reducer";

export default {
    loading: loadingSpinnerReducer,
    todo: todoReducer,
}