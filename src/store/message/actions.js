import { messageAction } from "./types";

export const setSuccessMessage = (payload) => {
    return {
        type: messageAction.SET_SUCCESS_MESSAGE,
        payload
    };
}

export const removeSuccessMessage = () => {
    return {
        type: messageAction.REMOVE_SUCCESS_MESSAGE,
        payload: null
    };
}

export const setErrorMessage = (payload) => {
    return {
        type: messageAction.SET_ERROR_MESSAGE,
        payload
    };
}

export const removeErrorMessage = () => {
    return {
        type: messageAction.REMOVE_ERROR_MESSAGE,
        payload: null
    };
}