import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {updateUserDetails } from '../services/updateUserDetails' 
import Header from '../components/Header';
import Footer from '../components/Footer';


function User() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [successMessage, setSuccessMessage] = useState('');

    const dispatch = useDispatch();

    // selectionner l'etat d'authentification depuis le store de redux
    const token = useSelector((state) => state.auth.token);

    // selectionner l'etat des infos du user depuis le store de redux
    const user = useSelector((state) => state.userDetails.user);


    // Pré-remplir les champs de formulaire avec les valeurs actuelles de l'utilisateur
     useEffect(() => {
        if (user) {
            setFirstName(user.firstName || '');
            setLastName(user.lastName || '');
        }
    }, [user]);
    ////////////////

    // SOUMISSION DU FORMULAIRE
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const updatedUser = await updateUserDetails(token,  firstName, lastName );
            dispatch(updatedUser)

            setLoading(false);
            setSuccessMessage(`Votre nom et prénom : ${ firstName } ,${ lastName } ont bien été modifiés`);

        } catch (error) {
            setError('Erreur lors de la mise à jour');
            setLoading(false);
        }
      
    };


    return (
        <div>

            <Header/>

            <main className="main bg-dark">
                <div className="header">
                    <form  onSubmit={handleSubmit}>

                        <h1>Welcome back</h1>
                        <div className='input-user-wrapper'>
                            <input className='input-user' type="text" placeholder='firstname'  id='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input className='input-user' type="text" placeholder='lastname'  id='lastname' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                       
                       <div className='edit-button-user-wrapper'>
                            <button type='submit' className="edit-button">Save</button>
                            <button 
                                type='button' 
                                className="edit-button" 
                                onClick={() => { 
                                    setFirstName(firstName); 
                                    setLastName(lastName); 
                                    }}>
                                    Cancel
                            </button>
                       </div>

                    </form>

                    {/* MESSAGE ERREUR LOADING OU SUCCESS */}
                    {loading && <p>Updating...</p>}
                    {error && <p className="error">{error}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}

                </div>

                <h2 className="sr-only">Accounts</h2>

                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>

                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>

            </main>

            <Footer/>

        </div>
    );
}

export default User;