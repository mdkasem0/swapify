import React from "react";
import { Outlet } from "react-router";
import Wrapper from "../Component/Common/Wraper";
import Navbar from "../Component/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="shadow-sm sticky top-0 left-0 right-0 bg-white z-50 mb-2">
        <Wrapper>
          <Navbar />
        </Wrapper>
      </div>

      <Outlet></Outlet>
      <div className="bg-gray-900 text-gray-200 pt-10">
        <Wrapper>
          <Footer />
        </Wrapper>
      </div>

      <ToastContainer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
