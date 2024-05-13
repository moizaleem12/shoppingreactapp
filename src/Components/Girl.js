import React from "react";
import Navbar from "./Navbar";
import WomenImg from "../assets/womenwallpaper.jpg";
import Marquee from "./Marquees";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../Category.css";
import "../App.css";
import PageTop from "./PageTop";
export default function Girl() {
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
          <Link to="/womenproducts" className="p-0">
            {" "}
            <img className="bannerimg" src={WomenImg} alt="" />
          </Link>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}
