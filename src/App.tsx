import React, { useState } from "react";
import SideBar from "./Components/Core/Sidebar";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="homepage">
      <SideBar />
      <HomePage />
    </div>
  );
}

export default App;
