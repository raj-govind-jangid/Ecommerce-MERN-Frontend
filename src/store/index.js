import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { messageReducer } from "./message/reducers";

const reducers = combineReducers({
    auth: authReducer,
    message: messageReducer,
})

export default reducers;