import React from "react";

const Profile = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-6">پروفایل کاربری</h1>
      <p className="mb-4">نام کاربری: {username}</p>

    </div>
  );
};

export default Profile;
