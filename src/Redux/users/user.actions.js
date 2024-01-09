import axios from "axios";
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types"
import { BASE_URL } from "../../constants/config";

// Defines the asynchronous action creator to fetch user data
export const getUser = (obj) => async(dispatch) => {

  // Dispatch an action to indicate that user login is in progress
  dispatch({ type: LOGIN_USER_LOADING });
  
  try {
    // Makes a POST request to the API endpoint for user login
    let data= await axios(BASE_URL+"/user/login", {
      method: "POST",
      data: obj,
    });

    // Extracts relevant data from the API response
    let { message, token, status } = data.data;
    console.log(message)

    // Checks the status of the response and dispatches corresponding actions
    if (status === 1) {
      // Dispatch a success action with the user token on successful login
      dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
    } else {
      // Displays an alertt with the error message and dispssatches an error action
      alert(message)
      dispatch({ type: LOGIN_USER_ERROR });
    }
  } catch (error) {
    // Dispatch an error action if there is an error during the API call
    dispatch({ type: LOGIN_USER_ERROR });
  }
}

    
