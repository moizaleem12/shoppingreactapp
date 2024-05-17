import React, { useState } from "react";
import wproducts from "../wproducts.js";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPause } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer.js";
import PageTop from "./PageTop.js";
import { Link } from "react-router-dom";
import { adding, sortingproducts } from "../features/navi/homenav.js";
import { useDispatch, useSelector } from "react-redux";

export default function WomenProducts() {
  const [two, settwo] = useState(false); //for grid
  const [griding, setgriding] = useState(false); //for grid
  //col-12
  const bargrid = () => {
    setgriding(!griding);
    settwo(false);
  };
  // col-6
  const twoparts = () => {
    settwo(!two);
    setgriding(false);
  };

  const dispatch = useDispatch();
  const gettinginfo = (items) => {
    dispatch(adding(items));
  };
  //search
  const { text, sorting } = useSelector((state) => {
    return state.gotocart;
  });
  //search
  const usertext = () => {
    return wproducts.filter((items) =>
      items.title.toLowerCase().includes(text)
    );
  };
  const svalu = (event) => {
    const selectedValue = event.target.value;
    dispatch(sortingproducts(selectedValue));
  };
  const getsort = () => {
    let sortedProducts = [...usertext()];
    if (sorting === "a-z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sorting === "z-a") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sorting === "lowtohigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sorting === "hightolow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };
  return (
    <div>
      <Navbar />
      <PageTop />
      <hr className="line" />
      <div className="container-fluid my-5">
        <div className="row d-flex justify content-between align-items-center ">
          <div className="col-6 d-flex flex-direction-column align-items-center   ">
            <h4 className="mx-5 text-dark"> View as </h4>

            <FontAwesomeIcon
              icon={faBars}
              onClick={bargrid}
              className="mx-3 floatingicons"
            />
            <FontAwesomeIcon
              icon={faPause}
              onClick={twoparts}
              className="mx-3 floatingicons"
            />
          </div>{" "}
          <div className="col-6 d-flex flex-direction-column align-items-center justify-content-end">
            <h4 className="mx-3"> Sort by </h4>{" "}
            <select
              className="p-3"
              id="selection"
              onChange={svalu}
              name="Featured"
            >
              <option value="featured"> Featured </option>{" "}
              <option value="a-z"> Alphabetically, A - Z </option>{" "}
              <option value="z-a"> Alphabetically, Z - A </option>{" "}
              <option value="lowtohigh"> Price, low to high </option>{" "}
              <option value="hightolow"> Price, high to low </option>{" "}
            </select>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="container-fluid text-dark">
        <div className="row">
          {" "}
          {getsort().length === 0
            ? "No item found"
            : getsort().map((items) => {
                return (
                  <div
                    className={`col-${
                      griding
                        ? "12 d-flex flex-column  justify-content-start align-items-center my-3"
                        : two
                        ? "6"
                        : "6"
                    }   text-center responsi`}
                    key={items.id}
                  >
                    <Link to="/p">
                      {" "}
                      <img
                        src={items.image}
                        alt="network error"
                        onClick={() => {
                          gettinginfo(items);
                        }}
                        className="pimage "
                      />
                    </Link>{" "}
                    <div
                      className={`col${
                        griding
                          ? "d-flex flex-column justify-content-start align-items-center"
                          : "d-flex"
                      }`}
                    >
                      <h3> {items.title} </h3> <del>{items.d_price} Rs </del>
                      <p>
                        {" "}
                        {items.price}
                        Rs{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>
                );
              })}{" "}
        </div>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}
