import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/UpdateProfile");
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user?.displayName || "ชื่อผู้ใช้"}</h2>
        <div className="card-action justify-between items-center mt-2">
          <button className="btn bg-red text-white" onClick={handleEditProfile}>
            แก้ไขโปรไฟล์
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
