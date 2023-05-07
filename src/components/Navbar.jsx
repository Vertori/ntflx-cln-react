import React from "react";
import netflixLogo from "../assets/netflix-logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-6 px-12 z-[100] fixed">
      <img className="w-32" src={netflixLogo} />
      <div>
        <button className="text-white pr-4 cursor-pointer">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded-[8px] cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
