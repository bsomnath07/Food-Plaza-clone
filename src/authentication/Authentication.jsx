import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Authentication = () => {
  // const [active, setActive] = useState("login");

  // const handleChange = () => {
  //   setActive(active === "login" ? "signup" : "login");
  // };

  return (
    <div className="flex  justify-center items-center  ">
      <div className="w-full max-w-md ">
        {/* {active === "login" ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <SignUp />
          </>
        )} */}
         <Login/>
        <SignUp/>
       
      </div>
    </div>
  );
};

export default Authentication;
