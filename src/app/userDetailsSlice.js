// TEST AVEC RTK 
// fusionner les actions et les reducers :
import { createSlice } from "@reduxjs/toolkit";



// actions et reducers pour les détails de l'utilisateur

const initialStateUser  = {
    user: {},
    error: null,
};

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: initialStateUser,
    reducers: {
        userDetailsSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        userDetailsFail: (state, action) => {
            state.error = action.payload;
        }
    }

})

export const {
    userDetailsSuccess,
    userDetailsFail
} = userDetailsSlice.actions;
  
export default userDetailsSlice