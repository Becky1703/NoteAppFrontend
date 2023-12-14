import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import PrivateRoute from "./PrivatetRoute";

export default function AllRoutes() {
    return  <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/notes" element={<PrivateRoute  ><NotesPage /></PrivateRoute>}></Route>

    </Routes>
}