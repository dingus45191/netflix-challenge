import React from "react";
import { Banner } from "./Banner";
import "./HomeScreen.css";
import { Navbar } from "./Navbar";

export const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
    </div>
  );
};
