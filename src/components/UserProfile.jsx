import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <img
        src={user?.photoURL || "https://via.placeholder.com/150"}
        alt="Profile"
        className="rounded-full w-32 h-32 mx-auto mb-3 border border-gray-300 shadow-sm"
      />
      <h3 className="text-xl font-semibold mb-2">
        {user?.displayName || "No Name"}
      </h3>
      <p className="text-gray-500">{user?.email || "No Email"}</p>

      <div className="mt-4">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
