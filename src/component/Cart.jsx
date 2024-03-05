import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/CartSlice";
const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, itemPrice) => totalPrice + itemPrice.price * itemPrice.qty,
    0
  );
  const handleCheckout = () => {
    dispatch(clearCart());
    navigate("/success");
  };

  return (
    <>
      {activeCart && (
        <div
          className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-gray-200 mb-3 overflow-y-auto ${
            activeCart ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 z-50`}
        >
          <div className="flex  justify-between items-center my-3">
            <span className="text-xl font-bold text-gray-800">My Order</span>
            <IoMdClose
              className="border-2 border-gray-600 text-gray-600 font-bold p-1 cursor-pointer text-xl rounded-md hover:text-white hover:bg-red-600"
              onClick={() => {
                setActiveCart(false);
              }}
            />
          </div>

          {user ? (
            <>
              {cartItems.length > 0 ? (
                cartItems.map((food) => (
                  <ItemCard
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    img={food.img}
                    qty={food.qty}
                  />
                ))
              ) : (
                <h2 className="text-center text-xl font-bold text-gray-800">
                  Your Cart is empty
                </h2>
              )}
            </>
          ) : (
            <h2 className="text-center text-xl font-bold text-gray-800">
              Your Cart is empty
            </h2>
          )}
          {user && totalQty > 0 && totalPrice > 0 && (
            <div className="bottom-0">
              <h5 className="font-semibold text-gray-800">Items: {totalQty}</h5>
              <h5 className="font-semibold text-gray-800">
                Total Amount: {totalPrice}
              </h5>
              <hr className="w-[90vw] lg:w-[18vw] my-2" />

              <button
                onClick={handleCheckout}
                className="bg-green-700 font-bold px-3 fixed bottom-0 text-white py-2 rounded-md w-[90vw] lg:w-[18vw] mb-16 cursor-pointer"
              >
                Check Out
              </button>
            </div>
          )}
        </div>
      )}
      <FaShoppingCart
        className={`fixed  top-5 right-5 cursor-pointer rounded-full bg-white shadow-md hover:bg-gray-300 p-2 
        ${user && totalQty > 0? "animate-bounce delay-700 transition-all" : ""}`}
        onClick={() => setActiveCart(true)}
        size={30}
      />
    </>
  );
};

export default Cart;
