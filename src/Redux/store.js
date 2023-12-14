import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore } from "@reduxjs/toolkit";
import userReducer from "./users/user.reducer";
import { thunk } from "redux-thunk";
import { noteReducer } from "./notes/note.reducer";


let rootReducer = combineReducers({

    userReducer:userReducer,
    noteReducer:noteReducer,
    
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))