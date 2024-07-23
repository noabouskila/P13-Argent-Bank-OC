import React ,{ useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArgentBankLogo from "../assets/argentBankLogo.png"
import { Link } from 'react-router-dom';
import { logout } from '../app/actions';
import { getUserDetails } from '../services/getUserDetails';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEnvelopeOpen,
    faUserCircle,
} from "@fortawesome/free-regular-svg-icons"
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'; 


function Header() {

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userDetails = useSelector((state) => state.userDetails.user);

    console.log("userDetails",userDetails)
    console.log("isAuthenticated",isAuthenticated)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    useEffect(() => {
        if (isAuthenticated) {
            const token = localStorage.getItem('token');
            if (token) {
                dispatch(getUserDetails(token));
                // console.log('Token:', token);
            }
            else{
                console.log("token is nulll")
            }
        }
    }, [isAuthenticated, dispatch]);
    
    // //////////////

    const handleSignOut = () => {
        dispatch(logout());

        // supprime le token du localStorage
        localStorage.removeItem('token'); 
        navigate('/');
    };

    return (
        <header>
            <nav className ="main-nav">
                <Link className ="main-nav-logo" to={"/"}>
                    <img
                    className ="main-nav-logo-image"
                    src={ArgentBankLogo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className ="sr-only">Argent Bank</h1>
                </Link>

                <div className='sign-and-name'>

                    <div>
                        {isAuthenticated && userDetails ? (
                            <div className='username-header'>
                                <FontAwesomeIcon icon={faUserCircle} />
                                <p> {userDetails.firstName}</p>
                            </div>
                        ) : ''}
                    </div>

                    <div>
                        {isAuthenticated ? (
                                <Link className="main-nav-item" to="/" onClick={handleSignOut}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                    <span className='span-sign'>Sign Out</span>
                                </Link>
                            ) : (
                                <Link className="main-nav-item" to="/signin">
                                    <FontAwesomeIcon icon={faUserCircle} />
                                    <span className='span-sign' >Sign In</span>
                                </Link>
                            )}
                    </div>

                </div>
               
            </nav>
        </header>
    );
}

export default Header;