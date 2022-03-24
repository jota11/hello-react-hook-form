import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import SignupPage from "./pages/forms/Signup";
import LoginPage from "./pages/forms/Login";

// Styles
import "./assets/styles/App.scss";

export default function App() {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<HomePage/>}/>
        </Routes>
    );
}