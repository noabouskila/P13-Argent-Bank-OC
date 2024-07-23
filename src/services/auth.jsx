const BASE_URL = import.meta.env.VITE_API_BASE_URL;


async function auth(username , password) {
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
        return { success: true, token: data.body.token };
      } else {
        return { success: false, message: data.message };
    }

   
}

export default auth;