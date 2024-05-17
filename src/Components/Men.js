import React from "react";

import Navbar from "./Navbar";
import MenImg from "../assets/menwallpaper.jpg";
import Marquee from "./Marquees";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../App.css";
import PageTop from "./PageTop";
export default function Men() {
  return (
    <>
      <div className="container-fluid  men">
        <div className="row">
          <Navbar />
          <PageTop />
        </div>
        <div className="row">
          <Marquee />
        </div>
        <div className="row">
          <Link to="/menproducts" className="p-0">
            <img className="bannerimg" src={MenImg} alt="" />
          </Link>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}
