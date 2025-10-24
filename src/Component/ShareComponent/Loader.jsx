import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="w-16 h-16 border-4 border-primary border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium">Loading, please wait...</p>
    </div>
  );
};

export default Loader;
