import React from 'react';
import { useState } from 'react';
import { loginSuccess } from '../app/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

import auth from '../services/auth';


function signIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch() ;
    const navigate = useNavigate()


    const handleSignIn =  async (event)=> {

        event.preventDefault();
        setLoading(true);
        setError('');
    
        try {

            // // Appel à la fonction auth pour obtenir le token
            // const result = await auth(username, password);
            // setLoading(false);

            // // verifier sil ya token
            // console.log('Auth result:', result);  
    
            // if (result.success) {

            //     // Stocke le token dans localStorage pour persistance : pour maintenir l'utilisateur connecté même après un rafraîchissement de la page.
            //     localStorage.setItem('token', result.token);

            //     // Met à jour l'état d'authentification avec Redux
            //     dispatch(loginSuccess(result.token));

            //     // Redirige vers la page utilisateur
            //     navigate('/user');

            // } else {
            //     setError(result.message || 'Invalid username or password');
            // }

            // dipatch l'etat dans le store 
            await dispatch(auth(username, password));

            // Redirige vers la page utilisateur
            navigate('/user');

        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
      
    }
    


    return (
        <div>
            
            <Header/>

            <main className ="main bg-dark">
                <section className ="sign-in-content">
                    <i className ="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSignIn}>
                        
                        <div className ="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                             type="text" 
                             id="username" 
                             value={username}
                             onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className ="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                             type="password" 
                             id="password" 
                             value={password}
                             onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className ="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>


                        {/* alerte en cas d'identifiants incorrects */}
                        {error && <p className='error-message'>{error}</p>}
                        {/* ou loading */}
                        {loading && <p className="loading-message">Loading...</p>}

                        <button className ="sign-in-button" type='submit'>Sign In</button>
                   
                    </form>
                </section>
            </main>

            <Footer/>
    
        </div>
    );
}

export default signIn;