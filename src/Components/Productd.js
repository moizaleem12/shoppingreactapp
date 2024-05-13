import React, { useState, useEffect } from "react";
// import Image from "../assets/girls.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTop from "./PageTop";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { productscollection } from "../features/navi/homenav";

export default function Productd() {
  // new gets
  const { gets } = useSelector((state) => {
    return state.gotocart;
  });
  const dispatch = useDispatch();
  const cartings = (item) => {
    dispatch(productscollection(item));
  };
  useEffect(() => {
    console.log(gets);
  }, [gets]);
  return (
    <>
      <Navbar />
      <PageTop />
      <hr />
      <div className="container-fluid ">
        {gets.map((item, index) => {
          return (
            <div className="row">
              <div className="col text-center">
                <img src={item.image} className="productimg" alt="no network" />
              </div>
              <div className="col">
                <h5>{item.title} </h5>
                <del className="text-danger">{item.d_price}.Rs</del>
                <strong className="mx-3">{item.price} RS</strong>
                <p>Model height is 6.0' and wearing M size.</p>
                <p>Size : S</p>
                <div className="col">
                  <button className="btn btn-light text-dark">S</button>
                  <button className="btn btn-light text-dark mx-4">M</button>
                  <button className="btn btn-light text-dark">L</button>
                </div>
                <p> Quantity:</p>
                
                <button
                  className="btn btn-dark text-light"
                  onClick={() => cartings(item)}
                >
                  Add to Cart
                </button>
                <button className="btn btn-dark text-light mx-3">
                  Buy it Now
                </button>
                <p>Actual colour of the product may vary slightly due to  photographic lighting sources or your device.
                </p>
                <h6>MATERIAL & CARE </h6>
                <p>80% Cotton 20% Polyester</p>
                <ul>
                  <li>Machine or handwash upto 30°C/86F</li>
                  <li>Gentle cycle</li>
                  <li>Do not dry in direct sunlight</li>
                  <li>Do not bleach</li>
                  <li>Do not iron directly on prints/embroidery</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
