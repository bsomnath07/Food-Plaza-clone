import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Dispatch the login action
      dispatch(
        loginUser({
          uid: user.uid,
          username: user.displayName,
          email: user.email,
        })
      );

      navigate("/");
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen  shadow-3xl rounded-xl ">
      <div className=" ">
        <div className="relative top-0 right-100  text-black shadow-md rounded-md px-8 pt-6 pb-12 mb-6 flex flex-col  w-[300px] h-[360px] bg-gray-400 ">
          <span>
            <img
              className="w-[60px] h-[60px] object-cover"
              src="images.png"
              alt="loading..."
            />
            <h2 className="relative left-24 -top-16">Log In</h2>
          </span>
          <div className="relative -top-2 ">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              value={email}
              className="rounded-sm my-4 pt-2 h-[21px] w-[100%]"
            />
          </div>
          <div className="relative -top-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
              className="rounded-sm my-4 pt-2 h-[21px] w-[100%] "
            />
          </div>
          <div className="relative -top-4 left-8">
            <button
              className="w-[90px] cursor-pointer mx-16 mr-1 p-1 mb-10 my-4 text-blue-800 font-bold rounded-md hover:bg-green-400 hover:text-white "
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="flex flex-row  relative">
              <span className=" relative -bottom-1 -left-2 font-semibold">
                Don't have an account?
              </span>
              <button
                onClick={() => navigate("/signup")}
                className="text-blue-800 hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
