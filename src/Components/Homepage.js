import React from "react";
import men from "../assets/men.jpg";
import boys from "../assets/boysbanner.jpg";
import girls from "../assets/girls.jpg";
import women from "../assets/womenbanner.jpg";
import Marquee from "./Marquees";
import Video from "../Components/Video";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "../App.css";
import PageTop from "./PageTop";
export default function Homepage() {
  return (
    <>
     

<PageTop />

<div className="container-fluid">
        <div className="row justify-content-around ">
          <div className="col types text-center">
            <Link to="/men">
              <img
                src={men}
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
          <div className="col types text-center">
            <Link to="/women">
              <img
                src={women}
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
          <div className="col types text-center">
        
              <img src={boys} style={{ cursor: "pointer" }} />
           
          </div>
          <div className="col types text-center">
            <img src={girls} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <Marquee />
      <Video />
      <Footer />
    </>
  );
}
