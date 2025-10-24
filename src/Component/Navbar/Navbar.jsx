import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Loader from "../ShareComponent/Loader";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser,loading } = use(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => toast.error(err.message));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${
              isActive
                ? "text-primary border-b-2 border-primary"
                : "text-gray-600 hover:text-primary"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allSkills"
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${
              isActive
                ? "text-primary border-b-2 border-primary"
                : "text-gray-600 hover:text-primary"
            }`
          }
        >
          All Skills
        </NavLink>

      </li>
      
      {
        user &&  <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${
              isActive
                ? "text-primary border-b-2 border-primary"
                : "text-gray-600 hover:text-primary"
            }`
          }
        >
          Profile
        </NavLink>

      </li>
      }
     
    </>
  );

  if(loading){
    return <Loader/>
  }

  return (
    <div className="navbar px-0">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost hover:bg-none pl-0  text-xl font-bold">
          <span className="text-primary">Swapify</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        {!user ? (
          <>
            <Link to="/login" className="btn btn-sm btn-outline mx-1">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm btn-primary mx-1">
              Signup
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer">
              <img
                src={
                  user.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full border"
              />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-base-200 rounded px-2 py-1">
                {user.displayName || "User"}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-error text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
