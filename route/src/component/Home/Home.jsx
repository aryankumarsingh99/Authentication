import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="flex justify-center items-center h-15  bg-black pt-1 gap-20    text-2xl ">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-white px-1 py-1 rounded-md rounded-r-2xl rounded-br-xl rounded-tl-2xl rounded-bl-2xl"
              : "text-black hover:bg-gray-700 px-3 py-2 rounded-md"
          }
        >
          Home
        </NavLink>
        <NavLink
          style={{ color: " white", textDecoration: "none" }}
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-white  px-3 py-2 rounded-md"
              : "text-black hover:bg-gray-700 px-3 py-2 rounded-md"
          }
        >
          Login
        </NavLink>
        <NavLink
          style={{ color: " white", textDecoration: "none" }}
          to="/signup"
        >
          Signup
        </NavLink>
        <button className="flex justify-center  bg-gray-600 pt-1 gap-20 w-23 rounded-2xl  text-xl">
          <NavLink
            style={{ color: " white", textDecoration: "none" }}
            to="/home"
          >
            LogOut
          </NavLink>
        </button>
      </nav>
      <div>
        <h1 className="flex justify-center items-center text-5xl pt-10 font-medium font-serif">
          Welcome to Home
        </h1>
      </div>
    </>
  );
}

export default Home;
