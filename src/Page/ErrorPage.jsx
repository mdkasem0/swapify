import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = ({ status = 404, message = "Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-4">
        {status}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-6">{message}</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105"
      >
        Go Back Home
      </button>

      
    </div>
  );
};

export default ErrorPage;
