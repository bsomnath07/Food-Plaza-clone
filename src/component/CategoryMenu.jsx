import React, { useState, useEffect } from "react";
import FoodData from "../data/FoodData";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="flex gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-6 mr-9 py-2 bg-gray-400 font-bold cursor-pointer rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, idx) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={idx}
              className={`px-3 mr-9 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${
                selectedCategory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
