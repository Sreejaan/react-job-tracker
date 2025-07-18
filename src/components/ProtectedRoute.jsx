import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');

    if(!token)<Navigate to='/login'replace />
    return <Outlet/>
}

export default ProtectedRoute;