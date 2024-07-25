// TEST AVEC RTK 
// fusionner les actions et les reducers :
import { createSlice } from "@reduxjs/toolkit";



// actions et reducers pour la mise à jour de l'utilisateur
const initialStateUpdateUser = {};

const userUpdateSlice = createSlice({
  name: "userUpdate",
  initialState: initialStateUpdateUser,
  reducers: {
    userUpdateSuccess: (state, action) => {
      state.success = true;
      state.user = action.payload;
    },
    userUpdateFail: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  userUpdateSuccess,
  userUpdateFail
} = userUpdateSlice.actions;

// exporter le reducer
export default userUpdateSlice