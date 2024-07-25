
import { configureStore } from '@reduxjs/toolkit';

// SANS RTK
// import authReducer from './reducers';
// import { userDetailsReducer } from './reducers';
// import { userUpdateReducer } from './reducers';


// AVEC RTK
import authSlice from './authSlice';
import userDetailsSlice from './userDetailsSlice';
import userUpdateSlice from './userUpdateSlice';



// SANS RTK
// const store = configureStore({
//     reducer: {
//       auth: authReducer,
//       userDetails: userDetailsReducer,
//       userUpdate: userUpdateReducer,
//     },
   
// });

// AVEC RTK 
const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      userDetails: userDetailsSlice.reducer,
      userUpdate: userUpdateSlice.reducer,
    },
   
});
  


export default store;
