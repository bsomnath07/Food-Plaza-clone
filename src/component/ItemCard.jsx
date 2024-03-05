import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdCurrencyRupee, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg bg-gray-100 p-1 mb-1">
      <MdDelete
        className="p-1 absolute right-7 cursor-pointer text-gray-600"
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }))
          toast.success(`${name} removed `)
        }}
      />
      <img src={img} alt="xyz" className="w-[50px] h-[50px]" />
      <div className="leading-4">
        <h2 className=" text-gray-800 font-semibold text-sm lg:text-md">
          {name}
        </h2>
        <div className="flex justify-between ">
          <span className="my-1">
            <MdCurrencyRupee className="text-green-500 font-bold" />
            {price}
          </span>
          <div className="flex justify-center items-center pr-1 gap-1 absolute right-7">
            <AiOutlinePlus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md  p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
            />
            <span className="text-black font-semibold hover:bg-gray-900 hover:text-white hover:rounded-sm cursor-pointer w-[16px]">
              {qty}
            </span>
            <AiOutlineMinus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md  p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={() =>
                qty > 1
                  ? dispatch(decrementQty({ id }))
                  : dispatch(removeFromCart({ id, name, qty, price, img }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
