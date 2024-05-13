import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
export default function PageTop() {
  const top = () => {
    if (window.scrollY >= 10) {
      window.scroll(0, 0);
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowAltCircleUp}
        onClick={top}
       className="pagesetiing"
      />
    </div>
  );
}
