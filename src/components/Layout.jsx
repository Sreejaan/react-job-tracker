import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        navigate('/login');
    }
    return (
        <>
            <nav>
                <h1>Job Tracker</h1>
                <button onClick={handleLogout}>Logout</button>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;