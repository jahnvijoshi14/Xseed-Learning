import "./App.css";
import Login from "./components/Login";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "./App.css";

import Register from "./components/Register";
import Classroom from "./components/Classroom";
import NavBar from "./components/Navbar";

const NotFound = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}> 404 not found</h1>
    </>
  );
};

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home" element={<Home />} />  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/logout" element={<Login />} />

          <Route path="*" element={<NotFound />} />

          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
