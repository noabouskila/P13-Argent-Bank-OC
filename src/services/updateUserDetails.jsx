// import { userUpdateSuccess, userUpdateFail } from '../app/actions';
import { userUpdateFail , userUpdateSuccess} from "../app/userUpdateSlice";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const updateUserDetails = (token , firstName, lastName) => {
    return async (dispatch) => {
        try {

            const response = await fetch(`${BASE_URL}/user/profile`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({firstName, lastName} )
            });
            const data = await response.json();
             // vérifier la structure de la réponse
                console.log('API response:', data);
            
            if (response.ok) {
                dispatch(userUpdateSuccess(data));
            } else {
                dispatch(userUpdateFail(data.message || 'Error updating user details'));
            }
        } catch (error) {
            dispatch(userUpdateFail(error.message));
        }
    };
};

