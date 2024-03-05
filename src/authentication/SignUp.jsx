import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { signupUser } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user.user);
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await signInWithEmailAndPassword(auth, email, password, username);
      await updateProfile(auth.currentUser, { displayName: username });
      dispatch(
        signupUser({
          uid: user.uid,
          username: user.displayName,
          email: user.email,
          username: user.username,
        })
      );
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("Sign up failed. Please check your information and try again.");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="">
        <div className="relative top-0 right-100 text-black shadow-md rounded-md px-8 pt-6 pb-12 mb-6   flex flex-col gap-1 w-[300px] h-[360px] bg-gray-300">
          <h2 className="relative left-20">Sign Up</h2>
          <div className="relative top-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              value={email}
              className="rounded-sm my-3 pt-2 h-[21px] w-[100%]"
            />
          </div>
          <div className="relative top-4">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder="Username"
              value={username}
              className="rounded-sm my-3 pt-2 h-[21px] w-[100%] "
            />
          </div>
          <div className="relative top-4">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
              className="rounded-sm my-4 pt-2 h-[21px] w-[100%] "
            />
          </div>
          <div className="relative top-6 left-6">
            <button
              onClick={handleSignUp}
              className="w-[90px] cursor-pointer mx-16 mr-1 p-1  mt-16px mb-8px text-blue-800 font-semibold rounded-sm  hover:bg-green-600 hover:text-white  hover:scale-150 transition-transform duration-500 ease-in-out"
            >
              Sign Up
            </button>
            <div className="flex flex-row  relative  -bottom-8 -left-2 gap-1">
              <span className=" relative font-semibold -bottom-0.5">
                Already have an account?
              </span>
              <button
                onClick={() => navigate("/login")}
                className="text-blue-800 hover:underline cursor-pointer"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
