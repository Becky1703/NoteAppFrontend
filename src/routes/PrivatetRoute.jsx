import { useEffect } from "react"
import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"

/**
 * checks if the user is logged in, if not, redirects to login page
 * @param {*} param0 
 * @returns 
 */

export default function PrivateRoute({children}){
    
    const {auth} = useSelector((state) => state.userReducer)

        if(auth){
            return children
        }

    return <LoginPage></LoginPage>
}
