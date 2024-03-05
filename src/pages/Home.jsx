import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import CategoryMenu from "../component/CategoryMenu";
import FoodItems from "../component/FoodItems";
import Cart from "../component/Cart";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { loginUser,setLoading } from "../redux/slices/AuthSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
        navigate("/login");
      }
    });
  }, [dispatch, navigate]);

  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
};

export default Home;
