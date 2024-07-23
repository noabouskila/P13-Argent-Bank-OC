import { userDetailsSuccess, userDetailsFail } from '../app/actions';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const getUserDetails = (token) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('API response:', data);

    if (response.ok) {
      dispatch(userDetailsSuccess(data.body)); 
      dispatch(userDetailsFail(data.message || 'Error fetching user details'));
    }
  } catch (error) {
    dispatch(userDetailsFail(error.message || 'Error fetching user details'));
  }
};
