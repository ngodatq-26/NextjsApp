import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/redux/authReducer";

const RootReducer = {
    auth : authReducer
}

const store = configureStore({
  reducer : RootReducer,
  devTools : true
})

export default store;