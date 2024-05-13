import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShop, faUser } from "@fortawesome/free-solid-svg-icons";

import "../App.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import SearchFiler from "./SearchFiler";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [checkcart, setcheckcart] = useState(false);

  const carting = () => {
    //drop
    setcheckcart(!checkcart);
  };
  const { cartnum } = useSelector((state) => {
    return state.gotocart;
  });
  useEffect(() => {
    console.log("cartnum", cartnum);
  }, [cartnum]);

  return (
    <>
      <div className="container-fluid  bar">
        <div className="row my-3  align-items-baseline">
          <div className=" col-sm-4  col  my-2">
            <Link to="/men" className="alink">
              Men
            </Link>
            <Link to="/women" className="alink">
              Women
            </Link>
          </div>
          <div className=" col-sm-8  col  d-flex justify-content-end align-items-center">
            <Link to={"/"}>
              <FontAwesomeIcon icon={faHome} className="mx-3 favi" />
            </Link>
            <Link to={"/signin"}>
              <FontAwesomeIcon icon={faUser} className="mx-3 favi" />
            </Link>
            <FontAwesomeIcon
              icon={faShop}
              onClick={() => carting()}
              className="mx-3 favi"
            />

            <span
              className="position-absolute
          translate-middle badge rounded-pill bg-dark cartnum"
            >
              {cartnum}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>

        {/* category */}

        <div className="row">
          <div className="col-sm-4 col-6 category">
            <ul className="d-flex flex-column align-items-start">
              <li>
                <Link to="">NEW IN</Link>
              </li>
              <li>
                <Link style={{ color: "red" }} to="">
                  SPECIL OFFER{" "}
                </Link>
              </li>
              <li>
                <Link style={{ color: "orange" }} to="">
                  {" "}
                  Clothing{" "}
                </Link>

                {/* dropdown */}

                <div className="droopi">
                  <ul>
                    <li>
                      <Link to="">Hoddies</Link>
                    </li>
                    <hr className="blackline" />
                    <li>
                      <Link href="">Shirts</Link>
                    </li>
                    <hr className="blackline" />
                    <li>
                      <Link href="">T-Shirts</Link>
                    </li>
                    <hr className="blackline" />
                    <li>
                      <Link href="">Trousers</Link>
                    </li>
                    <hr className="blackline" />
                  </ul>
                </div>
              </li>
              <li>
                <Link href="">SHOES</Link>
              </li>
              <li>
                <Link href="">#BREAKOUTSTYLE</Link>
              </li>
              <li>
                <Link style={{ color: "orange" }} href="">
                  Accesories
                </Link>
                <div className="droopi">
                  <ul>
                    <li>
                      <Link href="">hoddies</Link>
                    </li>
                    <hr className="blackline" />
                    <li>
                      <Link href="">hoddies</Link>
                    </li>
                    <hr className="blackline" />
                    <li>
                      <Link href="">hoddies</Link>
                    </li>
                    <hr className="blackline" />
                    <li>
                      <Link href="">hoddies</Link>
                    </li>
                    <hr className="blackline" />
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* search */}
          <div className="col-sm-8 col-6 d-flex justify-content-end align-items-center search">
            <SearchFiler />
          </div>
        </div>
      </div>
      <Cart checkcart={checkcart} />
    </>
  );
}
