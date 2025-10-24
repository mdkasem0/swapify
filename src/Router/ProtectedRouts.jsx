import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loader from "../Component/ShareComponent/Loader";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation(); // current attempted route

  if (loading) {
    return <Loader />; 
  }

  if (!user) {
    // redirect to login and store the original destination in state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRouts;
