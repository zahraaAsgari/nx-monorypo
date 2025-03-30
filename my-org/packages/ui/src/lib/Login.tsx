import React from 'react';

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Sign In
        </button>
      </div>
    </div>
  );
};
