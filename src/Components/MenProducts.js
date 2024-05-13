import React, { useState, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPause } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import products from "../products.js";
import PageTop from "./PageTop.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { adding, sortingproducts } from "../features/navi/homenav.js";
import { useDispatch, useSelector } from "react-redux";
export default function MenProducts() {
  const dispatch = useDispatch();
  const gettinginfo = (items) => {
    dispatch(adding(items));
  };
  const { text, sorting } = useSelector((state) => {
    return state.gotocart;
  });

  const usertext = () => {
    return products.filter((items) => items.title.toLowerCase().includes(text));
  };
  const svalu = (event) => {
    const selectedValue = event.target.value;
    dispatch(sortingproducts(selectedValue));
  };
  const getsort = () => {
    let sortedProducts = [...usertext()];
    if (sorting == "a-z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sorting == "z-a") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sorting == "lowtohigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sorting == "hightolow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };

  return (
    <>
      <Navbar />
      <PageTop />
      <hr className="line" />
      <div className="container-fluid my-5">
        <div className="row d-flex justify content-between align-items-center ">
          <div className="col-sm-3 col-md-4 col-lg-6 d-flex flex-direction-column align-items-center   ">
            <h4 className="mx-5 text-dark"> View as </h4>

            <FontAwesomeIcon icon={faBars} className="mx-3 floatingicons" />
            <FontAwesomeIcon icon={faPause} className="mx-3 floatingicons" />
          </div>
          {/* //sorting */}
          <div className="col-sm-9 col-md-8 col-lg-6 d-flex flex-direction-column align-items-center justify-content-end">
            <h4 className="mx-3"> Sort by </h4>
            <select
              className="p-3"
              id="selection"
              onChange={svalu}
              name="Featured"
            >
              <option value="featured"> Featured </option>
              <option value="a-z"> Alphabetically, A - Z </option>
              <option value="z-a"> Alphabetically, Z - A </option>
              <option value="lowtohigh"> Price, low to high </option>
              <option value="hightolow"> Price, high to low </option>
            </select>
          </div>
        </div>
      </div>
      <div className="container-fluid text-dark">
        <div className="row">
          {getsort().length === 0
            ? "No item found"
            : getsort().map((items) => {
                return (
                  <div
                    className="col-6 d-flex flex-column align-items-center  text-center "
                    key={items.id}
                  >
                    <Link to="/p">
                      <img
                        src={items.image}
                        alt="network error"
                        onClick={() => {
                          gettinginfo(items);
                        }}
                        className="pimage "
                      />
                    </Link>
                    <div className="col-6 text-center">
                      <h3 className="ptext"> {items.title} </h3>{" "}
                      <del>{items.d_price} Rs </del>
                      <p> {items.price} Rs </p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  );
}
