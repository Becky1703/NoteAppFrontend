import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR,
    DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, 
    GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note.types"
import axios from "axios"
import { BASE_URL } from "../../constants/config"
import { store } from "../store"
import { LOGOUT } from "../users/user.types"

// Deefines the asynchronous action creator function to fetch notes
export const getNotes=()=>async(dispatch)=> {
    // Extracts the authentication token from the Redux store
    const {token} = store.getState().userReducer

    // Dispatches a loading action to indicate that the notes are being fetched
    dispatch({type:GET_NOTES_LOADING})
    try {

        // Makes a GET request to the API endpoint for notes and retrieves the response data
        const res = await axios.get(BASE_URL+"/note",{
            method:"GET",
            headers:{
                Authorization:token
            }
        })

        // Extracts the status, message, and data from the response data
        const {status, message, data} = res.data
        console.log(message)

        // Checks the status of the response and dispatches a success action to indicate that the notes have been fetched successfully
        if(status===1){

        // Dispatches a success action with the fetched notes    
        dispatch({type:GET_NOTES_SUCCESS, payload:data})
        } else {

            // Dispatch an error action if the status is not 1
            dispatch({type: GET_NOTES_ERROR})
        
        }

    } catch (error) {
        // Dispatches an error action if there is an error fetching the notes
        
        dispatch({type:GET_NOTES_ERROR})
    }

}


// Defines the asynchronous action creator function to create notes
export const createNotes=(obj)=>async(dispatch)=> {
    // Extract the authentication token from the Redux store
    const {token} = store.getState().userReducer

        // Dispatches a loading action to indicate that the notes are being created.
        dispatch({type:CREATE_NOTES_LOADING})
        try {
    
            // Makes a POST request to the API endpoint for creating notes
            const res = await axios(BASE_URL+"/note/create",{
                method: "POST",
                data: obj,
                headers: {
                    Authorization:token
                }
            })

            // Extract relevant data from the API response
            const {status, message} = res.data
            console.log(message)
            
            // Dispatches a success action if the API call is successful. Otherwise, dispatches an error action.
            if(status===1){
    
            dispatch({type:CREATE_NOTES_SUCCESS})
            dispatch(getNotes())
            } else if(status===2) {

                dispatch({type:LOGOUT})
            
            }else{  
                dispatch({type: CREATE_NOTES_ERROR})
            } 
    
        } catch (error) {
            dispatch({type:CREATE_NOTES_ERROR})
        }
    }


// Defines the asynchronous action creator function to delete notes
export const deleteNotes=(id)=>async(dispatch)=> {
    const {token} = store.getState().userReducer

    // Dispatches a loading action to indicate that the notes are being deleted.
    dispatch({type:DELETE_NOTES_LOADING})
    try {
    
        const res = await axios(BASE_URL+"/note/",{
            method: "DELETE",
            headers: {
                Authorization:token,
                id:id
            }
        })

        // Extracts the status and message from the API response.
        const {status, message} = res.data
        console.log(message)
            
        // Dispatches a success action if the API call is successful. Otherwise, dispatches an error action.
        if(status===1){
    
        dispatch({type:DELETE_NOTES_SUCCESS})
        dispatch(getNotes())
        } else if(status===2) {
            dispatch({type:LOGOUT})

        } else {
    
        dispatch({type: DELETE_NOTES_ERROR})      
        }
    
    } catch (error) {
        dispatch({type:DELETE_NOTES_ERROR})
    }
}

    // Defines the asynchronous action creator function to update notes
    export const updateNotes=(id, obj)=>async(dispatch)=> {
        const {token} = store.getState().userReducer

        // Dispatches a loading action to indicate that the notes are being updated.
        dispatch({type:UPDATE_NOTES_LOADING})
        try {
    
            const res = await axios(BASE_URL+"/note",{
                method: "PATCH",
                data: obj,
                headers: {
                    Authorization:token,
                    id:id
                }
            })

            // Extracts the status and message from the API response.
            const {status, message} = res.data
            console.log(message)


            // Dispatches a success action if the API call is successful. Otherwise, dispatches an error action.
            if(status===1){
    
            dispatch({type:UPDATE_NOTES_SUCCESS})
            dispatch(getNotes()) 
            } else if(status===2) {

                dispatch({type:LOGOUT})

            } else {
                dispatch({type: UPDATE_NOTES_ERROR})
            
            }
    
        } catch (error) {
            dispatch({type:UPDATE_NOTES_ERROR})
        }
    }
