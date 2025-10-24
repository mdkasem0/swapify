import React from "react";

const Wrapper = ({ children,className = "" }) => {
  return (
    <div
      className={` w-11/12 md:w-10/12 mx-auto  flex flex-col  transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
