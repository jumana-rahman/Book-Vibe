import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-red-100 to-pink-200 text-center px-4">
      
      {/* Error Code */}
      <h1 className="text-7xl font-extrabold text-red-500 mb-4">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <button
        onClick={() => window.location.href = "/"}
        className="cursor-pointer px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300"
      >
        Go Home
      </button>

    </div>
  );
};

export default ErrorPage;