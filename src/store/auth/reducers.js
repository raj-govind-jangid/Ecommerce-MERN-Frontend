import { authAction } from "./types"
const isLoggedIn = localStorage.getItem('isLoggedIn');
const userToken = localStorage.getItem('userToken');

const initialState = {
    isLoggedIn: isLoggedIn ? isLoggedIn : false,
    userToken: userToken ? userToken : null
}

export const authReducer = (state = initialState,{type, payload}) => {
    switch(type){
        case authAction.SET_AUTH:
            localStorage.setItem("userToken",payload.userToken)
            localStorage.setItem("isLoggedIn",payload.isLoggedIn)
            return {...state, isLoggedIn: payload.isLoggedIn, userToken: payload.userToken}
        case authAction.REMOVE_AUTH:
            localStorage.clearItem()
            return {...state, isLoggedIn: false, userToken: null}                
        default: return state;
    }
}


