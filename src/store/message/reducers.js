import { messageAction } from "./types"

const initialState = {
    successMessage: null,
    errorMessage: null
}

export const messageReducer = (state = initialState,{type, payload}) => {
    switch(type){
        case messageAction.SET_SUCCESS_MESSAGE:
            return {...state, successMessage: payload}
        case messageAction.REMOVE_SUCCESS_MESSAGE:
            return {...state, successMessage: payload}
        case messageAction.SET_ERROR_MESSAGE:
            return {...state, errorMessage: payload}
        case messageAction.REMOVE_ERROR_MESSAGE:
            return {...state, errorMessage: payload}        
        default: return state;
    }
}


