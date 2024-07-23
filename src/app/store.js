
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers';
import { userDetailsReducer } from './reducers';
import { userUpdateReducer } from './reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    userDetails: userDetailsReducer,
    userUpdate: userUpdateReducer,
  },
 
});

export default store;
