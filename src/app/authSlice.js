// TEST AVEC RTK 
// fusionner les actions et les reducers :
import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
    isAuthenticated: false,
    token: null,

};

// fusionne les actions et reducers avec slice
const  authSlice  = createSlice({
    name : "auth" ,
    initialState : initialStateAuth ,
    reducers : {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        loginFail: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
        checkAuth: (state) => {
            const token = localStorage.getItem('token');
            if (token) {
              state.isAuthenticated = true;
              state.token = token;
            } else {
              state.isAuthenticated = false;
              state.token = null;
            }
        }
    }

})

// exporter les actions et reducer (slices) de authslice 
export const {
    loginSuccess,
    loginFail,
    logout,
    checkAuth
} = authSlice.actions ;

// exporter le reducer
export default authSlice;