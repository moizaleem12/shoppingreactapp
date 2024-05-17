import React from "react";
import Vcard from "../assets/visa.png";
import Mcard from "../assets/mastercard.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPause } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="-fluid fdesign">
      <div className="row">
        <div className="col-sm-4 col">
          <h5 className="my-3">ABOUT US</h5>
          <p className="text-light">About</p>
          <p className="text-light">Contact Us</p>
          <p className="text-light">Store Location</p>
          <p className="text-light">Terms Of Service</p>
          <p className="text-light">Refund Policy</p>
        </div>
        <div className="col-sm-4 col">
          <h5 className="my-3">POLICIES</h5>
          <p className="text-light">Shipping</p>
          <p className="text-light">Return & Exchange</p>
          <p className="text-light">Track Your Order</p>
          <p className="text-light">Cancellation Policy</p>
        </div>
        <div className="col-sm-4 col">
          <h5 className="my-3">CUSTOMER SERVICE</h5>
          <p className="text-light">FAQ's</p>
          <p className="text-light">Privacy Policy</p>
          <p className="text-light">Terms & Conditions</p>
        </div>
        <div className="col-sm-4 col">
          <h5 className="my-3">BLOGS</h5>
          <p className="text-light">Blogs & News</p>
        </div>
        <div className="col-sm-4 col">
          <h5 className="my-3">Can we help you?</h5>
          <p className="text-light">Call us: +92 321 7040999 </p>
          <p className="text-light" style={{ textAlign: "center" }}>
            +92 332 0489991
          </p>
          <p className="text-light">Timings: Monday to Saturday</p>
          <p className="text-light">10:00 AM to 05:00 PM</p>
          <p className="text-light">support@breakout.com.pk</p>
        </div>
        <div className="col-sm-4 col">
          <h5 className="my-3">NEWSLETTER SIGN UP</h5>
          <p className="text-light">
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>
          <div className="col d-flex justify-content-between flex-sm-column">
            <input className="p-3 inputbox" type="email" placeholder="Email" />
            <button className="btn my-sm-4 btn-light">Subscribe</button>
          </div>
          <div className="col d-flex justify-content-between my-3">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
            <FontAwesomeIcon icon={faGoogle} className="icon" />
          </div>
        </div>
      </div>
      <hr />

      <div className="row ">
        <div className="col-6 col-sm-12 center ">
          <p className="text-light" style={{ width: "max-content" }}>
            © 2023 Breakout All Rights Reserved.
          </p>
        </div>
        <div className=" col-6 col-sm-12  d-flex justify-content-end justify-content-sm-center ">
          <img src={Vcard} className="vcard" alt="network error" />
          <img src={Mcard} className="mcard" alt="network error" />
        </div>
      </div>
    </div>
  );
}
