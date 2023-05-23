import React, { useEffect, useState } from "react";
import netflixLogo from "../assets/netflix-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div
      className={`${
        isActive ? "bg-black shadow-md" : "bg-none"
      } w-full flex items-center justify-between py-6 px-4 md:px-12 z-[100] fixed transition-all duration-500`}
    >
      <Link to="/">
        <img className="w-32" src={netflixLogo} />
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 cursor-pointer">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded-[8px] cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 cursor-pointer">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded-[8px] cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
