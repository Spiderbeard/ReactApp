import {createStore} from "redux";

const initalState = {
    user : {
        username: "",
        password: ""
    },
    jwtToken: "",
    isUserLoggedin: false 
    
};


function reducer(state = initalState ,action) {
   switch (action.type){
       case "usernameChange":
        return{...state, user:{...state.user,  username: action.payload}};
       case "passwordChange":
        return {...state, user:{...state.user ,password: action.payload}};
       case "jwtChange":
        return {...state, jwt:{...state.jwt , jwt: action.payload}, isUserLoggedin:{...state, isUserLoggedin: true}};
       case "confirmPassword":
           return {...state, user:{...state.user, confirmPassword: action.payload, role:'user' }};  
       case "logout":
        return {...state, user:{ }, jwt:{}, isUserLoggedin:{...state, isUserLoggedin: false}}; 
       default:
           return state; 
   }
    
    
}

export const store = createStore(reducer);