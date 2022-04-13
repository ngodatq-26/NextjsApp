import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name : 'setToken',
    initialState : {token : 0},
    reducers : {
        setTokenCookies : (state,action) =>{
            state.token = action.payload
        }
    },
    
})
const {reducer,actions} = AuthSlice
export const {setTokenCookies} = actions
export default reducer;