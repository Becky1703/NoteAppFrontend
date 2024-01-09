import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore } from "@reduxjs/toolkit";
import userReducer from "./users/user.reducer";
import { thunk } from "redux-thunk";
import { noteReducer } from "./notes/note.reducer";

// Combines multiple reducers into a single rootReducer
let rootReducer = combineReducers({

    userReducer:userReducer,
    noteReducer:noteReducer,
    
});

// Creates the Redux store by appplying middleware (thunk) to the rootReducer
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))