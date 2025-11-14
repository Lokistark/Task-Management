import React from "react";
import Galaxy from "./components/Galaxy";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Galaxy />
      <Navbar />
      <Routes>
        {/* Redirect root "/" to /login */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Login page */}
        <Route path="/login" element={<Login />} />
        {/* Home page */}
        <Route path="/home" element={<Home />} />
        {/* Create Task page */}
        <Route path="/create" element={<CreateTask />} />
        {/* Edit Task page */}
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

