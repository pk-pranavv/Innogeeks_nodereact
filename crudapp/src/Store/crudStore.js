import { createStore } from "redux";

const initialstate = {
    email: "",
    password: "",
    islogged: "",
    users: [],
    fullname: "",
    usermail: "",
    userpassword: "",
    userphone: "",
    usergender: "Male",
};
const crudReducer = (state = initialstate, action) => {
    if(action.type == "email") {
        return {
            ...state,
            email: action.value,
        };
    }
    if (action.type == "password") {
        return {
            ...state,
            password: action.value,
        };
    }
    if(action.type == "logged"){
        return {
            ...state,
            islogged: action.value,
        };
    }
    if(action.type == "users"){
        return {
            ...state,
            users: action.value,
        };
    }
    if(action.type == "fullname"){
        return {
            ...state,
            users: action.value,
        };
    }
    if(action.type == "usermail"){
        return {
            ...state,
            users: action.value,
        };
    }
    
    if(action.type == "userpassword"){
        return {
            ...state,
            users: action.value,
        };
    }
    if(action.type == "userphone"){
        return {
            ...state,
            users: action.value,
        };
    }
    if(action.type == "usergender"){
        return {
            ...state,
            users: action.value,
        };
    }

    return state;
};

const crudStore = createStore(crudReducer);

export default crudStore;

