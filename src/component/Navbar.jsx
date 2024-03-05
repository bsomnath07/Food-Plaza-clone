import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { logoutUser, signupUser } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/CartSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const username = useSelector((state) => state.user.username);
  const handleLoginClick = () => {
    navigate("/authentication");
  };
  const handleLogoutClick = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
  };
 
  console.log("user details from navbar", username);
  return (
    <nav class="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Food Plaza</h1>
      </div>
      <div className="px-12">
        <input
          type="search"
          name="search"
          id=""
          placeholder="search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          class="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] "
        />
      </div>

      {user ? (
        <div className="relative right-12  flex justify-center -top-2 ">
          <span className="relative top-3.5 left-12  rounded inline-block">
            <span className="font-medium"> welcome</span>
            <br />
            <span className="font-semibold">{user.username}</span>{" "}
          </span>
          <button
            onClick={handleLogoutClick}
            className="w-[90px] h-[30px] cursor-pointer mx-16 mr-1 p-1 mb-10 my-4 bg-gray-600 text-white font-bold rounded-md hover:bg-green-600 hover:text-white "
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="relative right-12 -top-3">
          <button
            onClick={handleLoginClick}
            className="w-[90px] h-[30px] cursor-pointer mx-16 mr-1 p-1 mb-10 my-4 bg-gray-600 text-white font-bold rounded-md hover:bg-green-600 hover:text-white "
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
