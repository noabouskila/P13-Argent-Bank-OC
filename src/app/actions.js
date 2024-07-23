// ACTIONS DU STORE 


// types d'actions
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const  USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL"

export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS"
export const USER_UPDATE_FAIL = "USER_UPDATE_FAIL"



// action creators : 
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});



export const userDetailsSuccess = (data) => ({
    type: USER_DETAILS_SUCCESS,
    payload: data,
});
  
export const userDetailsFail = (error) => ({
    type: USER_DETAILS_FAIL,
    payload: error,
});

export const userUpdateSuccess = (data) => ({
    type: USER_UPDATE_SUCCESS,
    payload: data,
});

export const userUpdateFail = (error) => ({
    type: USER_UPDATE_FAIL,
    payload: error,
});



// verifier si le token depuis le local storage
export const CHECK_AUTH = 'CHECK_AUTH';

export const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      type: LOGIN_SUCCESS,
      payload: token,
    };
  } else {
    return {
      type: LOGOUT,
    };
  }
};