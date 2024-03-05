import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./authentication/Authentication";
import Success from "./pages/Success";

import SignUp from "./authentication/SignUp";
import Login from "./authentication/Login";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
