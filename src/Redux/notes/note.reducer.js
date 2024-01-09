import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR,
         DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, 
         GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note.types";


// Defines the initial state for the note reducer         
let initialState = {
    loading: false,
    error: false,
    data: [],
}

// Defines the note reducer function that handles various actions  
export const noteReducer = (state = initialState, action) => {
   
    // Destructures the action object to extract type and payload
    const {type, payload} = action;


    // SWitch statement to handle different action types 
    switch (type) {
        case GET_NOTES_LOADING: {
            
            // Returns a new state object with the loading flag set to true and the error flag set to false
            return {
                ...state, loading: true
            }
        }

        case GET_NOTES_SUCCESS: {
            
            // Returns a new state object with the loading flag set to false, the error flag set to false,
            return {
                ...state, loading: false, error: false, data: payload
            }
        }
        
        case GET_NOTES_ERROR: {
            
            // Returns a new state object with the loading flag set to false, the error flag set to true,
            return {
                ...state, loading: false, error: true
            }
        }


        case CREATE_NOTES_LOADING: {
            
            // Returns a new state object with the loading flag set to true, the error flag set to false,
            return {
                ...state, loading: true, error: false, data: []
            }
        }

        case CREATE_NOTES_SUCCESS: {
            
            // Returns a new state object with the loading flag set to false, the error flag set to false,
            return {
                ...state, loading: false, error: false,
            }
        }
        
        case CREATE_NOTES_ERROR: {
            
            // Returns a new state object with the loading flag set to false, the error flag set to true,
            return {
                ...state, loading: false, error: true
            }
        }

        case UPDATE_NOTES_LOADING: {

            // Returns a new state object with the loading flag set to true, the error flag set to false,
            return {
                ...state, loading: true, error: false, data: []
            }
        }

        case UPDATE_NOTES_SUCCESS: {
            
            // Returns a new state object with the loading flag set to false, the error flag set to false,
            return {
                ...state, loading: false
            }
        }
        
        case UPDATE_NOTES_ERROR: {

            // Returns a new state object with the loading flag set to false, the error flag set to true,
            return {
                ...state, loading: false, error: true
            }
        }


        case DELETE_NOTES_LOADING: {
            
            // Returns a new state object with the loading flag set to true, the error flag set to false,
            return {
                ...state, loading: true
            }
        }

        case DELETE_NOTES_SUCCESS: {
            
            // Returns a new state object with the loading flag set to false, the error flag set to false,
            return {
                ...state, loading: false, error: false
            }
        }
        
        case DELETE_NOTES_ERROR: {

            return {
                ...state, loading: false, error: true
            }
        }


         default: {
            // Returns the current state object if the action type is not recognized
           return state
       }
    }    
}