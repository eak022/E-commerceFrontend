import React, { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [newPhotoURL, setNewPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: newPhotoURL || photoURL,
      });

      setPhotoURL(newPhotoURL || photoURL);
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Profile updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Failed to update profile",
        text: error.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter new profile picture URL"
          className="w-full p-2 border border-gray-300 rounded"
          value={newPhotoURL}
          onChange={(e) => setNewPhotoURL(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button
        onClick={handleUpdateProfile}
        disabled={loading}
        className="bg-red text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </div>
  );
};

export default UpdateProfile;
