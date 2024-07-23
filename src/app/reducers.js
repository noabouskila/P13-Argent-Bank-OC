// REDUCERS DU STORE
// spécifient comment l'état de l'application doit changer en réponse à une action
// en prenant en compte : etat initial + actions a changer

import{
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT , 

    USER_DETAILS_FAIL , 
    USER_DETAILS_SUCCESS , 

    USER_UPDATE_FAIL  , 
    USER_UPDATE_SUCCESS ,


    CHECK_AUTH,

} from './actions';

const initialStateAuth = {
      isAuthenticated: false,
      token: null,

};

// reducer d'authentification
const authReducer = (state = initialStateAuth, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                // token: action.payload,
                token : null
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
            };

        //  verifier si le token est dans le localstorage

        // !!action.payload renvoie l'authentificatation a TRUE : si valeur veridique 
        // !!action.payload renvoie l'authentificatation a FALSE : si valeur FAUSSE (0 ou null ou undefined)
        case CHECK_AUTH:
            return {
                ...state,
                isAuthenticated: !!action.payload,
                token: action.payload,
            };
        default:
        return state;
    }
};


const initialStateUser  = {
    user: {},
    error: null,
};

// reducer de recuperation de donnees de profil de user
export const userDetailsReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case USER_DETAILS_SUCCESS:
            return { 
                ...state,
                user: action.payload,
                error: null,
            };

        case USER_DETAILS_FAIL:
            return { 
                ...state, 
                error: action.payload
            };

        default:
            return state;
    }
};

// reducer de modification de donnees de profil de user
export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_SUCCESS:
            return { 
                ...state,
                success: true, 
                user: action.payload
            };
        case USER_UPDATE_FAIL:
            return { 
                ...state,
                error: action.payload 
            };
        default:
            return state;
    }
};

export default authReducer;


