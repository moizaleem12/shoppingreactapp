import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteitems,
  emptydata,
  increase,
  decreaseed,
} from "../features/navi/homenav";
export default function Cart({ checkcart }) {
  // data
  const { data, total } = useSelector((state) => {
    console.log(state);
    return state.gotocart;
  });
  const dispatch = useDispatch();
  // delete item one by one
  const deleted = (index) => {
    dispatch(deleteitems(index));
  };
  // empty cart
  const empty = () => {
    dispatch(emptydata());
    setTimeout(() => {
      alert("cart empty");
    }, 100);
  };
  // increase
  const ind = (item) => {
    dispatch(increase(item));
  };
  // decrease
  const dec = (item) => {
    dispatch(decreaseed(item));
  };

  return (
    <>
      <div
        className={`container ${
          checkcart ? "cartingflow active" : "cartingflow"
        }`}
      >
        <p>Your Shopping Cart</p>
        <hr
          style={{
            border: "none",
            height: "0.5vh",
            background: "green",
            width: "auto",
          }}
        />
        {/* cart */}
        <div className="row flex-direction-column">
          {data.map((items, index) => {
            return (
   <div  className="col-12 d-flex flex-column align-items-center my-3 "  key={items.id} >
      <div className="col-12 d-flex align-items-center">
       <img src={items.image}   style={{ height: "10vh" }} />
                  <h6 className="mx-2">{items.title} </h6>
                  <h6 className="mx-2">{items.price} </h6>
          
        </div>         
        <div className="col-12 d-flex align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => ind(items)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <p className="mx-2"> {items.quantity} </p>
                  <button
                    className="btn btn-dark mx-2"
                    disabled={items.quantity <= 0}
                    onClick={() => dec(items)}
                  >
                    {" "}
                    -
                  </button>
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => deleted(index)}
                  >
                    Delete Item{" "}
                  </button>

        </div>
                </div>

               
            );
          })}
        </div>

        {/* total bill */}
        <div className="col d-flex justify-content-between align-items-center">
          <p>Total bill / Including Tax:</p>
          <strong
            style={{
              color: "red",
            }}
          >
            {total}
          </strong>
        </div>
        <button className="btn btn-dark" onClick={empty}>
          Empty Cart
        </button>
      </div>
    </>
  );
}
