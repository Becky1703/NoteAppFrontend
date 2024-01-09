import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGOUT } from "./user.types"

// Defines the initial state for the User router
const initialState = {
    token: null,
    auth: false,
    loading: false,
    error: false
}

// Defines user reducer function that handles various actions
export default function userReducer(state=initialState, action) {
    // Destructures the action object to get the type and payload
    const {type, payload} = action

    // Checks the type of action and performs the corresponding action
    switch(type) {

        case LOGIN_USER_LOADING: {

            // Returns the state with loading set to true
            return {
                ...state, loading: true
            }
        }

        case LOGIN_USER_SUCCESS: {

            // Returns the state with loading set to false, error set to false, token set to payload, and auth set to true
            return {
                ...state, loading: false, error: false, token: payload, auth: true
            }

        }

        case LOGIN_USER_ERROR: {


            // Returns the state with loading set to false, error set to true, and auth set to false
            return {
                ...state, loading: false, error: true
            }
        }

        
        case LOGOUT : {
            // Returns the initial state
            return initialState
        }

        default: {
            // Returns the current state objet if the action type is not recognized
            return state
        }

        }
    }
