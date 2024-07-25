// import { loginFail,loginSuccess } from "../app/actions";
import { loginFail, loginSuccess } from "../app/authSlice";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const auth = (username , password) =>  async(dispatch) =>{

  try{
    const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password: password }),
      });
    
      const data = await response.json();
    
      // vérifier la structure de la réponse
      console.log('API response:', data);
      
      if (response.ok) {
        console.log('Login successful');
        // return { success: true, token: data.body.token };
        localStorage.setItem('token', data.body.token); // Stocker le token dans le localStorage
        dispatch(loginSuccess(data.body.token));
       
        
      } else {
        console.log('Login failed');
        dispatch(loginFail(data.message));
       
       
      }

    } catch (error) {
      console.log('Login faileddd');
      dispatch(loginFail('An error occurred'));
      
    }

   
}

export default auth;