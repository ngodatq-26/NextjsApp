import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "../modules/auth/redux/authReducer";

const combineReducer = combineReducers({
  authReducer,
})

const store = configureStore({
  reducer : combineReducer,
  devTools : true
})

export const makeStore =() => store;

const wrapper = createWrapper(makeStore,{debug : true});

export default wrapper;