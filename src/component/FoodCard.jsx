import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();
 const user=useSelector(state=>state.user.user);
 const handleAddToCart = () => {
  if (user) {
    dispatch(addToCart({ id, name, img, price, rating, qty: 1 }));
    handleToast(name);
  } else {
    alert("Please sign in to add to cart.");
    // Optionally, you can navigate to the login page or show a login modal
  }
};
  return (
    <div className="font-bold  w-[250px] p-5 bg-white flex flex-col gap-2 rounded-md flex-wrap">
      <img
        src={img}
        alt=""
        className="w-auto  h-[130px] hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out"
      />
      <div className="text-sm  flex justify-between">
        <h2> {name}</h2>
        <span className=" text-green-500">₹ {price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}....</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-blue-400" />
          {rating}
        </span>
        {/* <button
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm  w-[95px] "
          onClick={() => {
            dispatch(addToCart({ id, name, img, price, rating, qty: 1 }));
            handleToast(name);
          }}
        >
          Add to Cart
        </button> */}
        <button
          className="p-1 text-white bg-green-500 hover:bg-green-700 rounded-md text-sm w-[95px] cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
