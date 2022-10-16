import axios from "axios";
import user from "../../apiList/user";
import { messageAction } from "../message/types";
import { authAction } from "./types";

export const callLoginApi = (request) => async (dispatch) => {
    await axios.post(user.login,request).then((data)=>{
        if(data.data.status){
            let response = {
                userToken: data.data.token,
                isLoggedIn: true
            }
            dispatch({type: messageAction.SET_SUCCESS_MESSAGE, payload: data.data.message})    
            dispatch({type: authAction.SET_AUTH, payload: response})    
        }
    }).catch((error)=>{
        dispatch({type: messageAction.SET_ERROR_MESSAGE, payload: error.response.data.message})
    })
};

export const callRegisterApi = (request) => async (dispatch) => {
    await axios.post(user.register,request).then((data)=>{
        if(data.data.status){
            dispatch({type: messageAction.SET_SUCCESS_MESSAGE, payload: data.data.message})    
        }
    }).catch((error)=>{
        dispatch({type: messageAction.SET_ERROR_MESSAGE, payload: error.response.data.message})
    })
};