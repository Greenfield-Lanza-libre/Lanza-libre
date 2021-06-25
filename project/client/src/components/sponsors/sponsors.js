import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const spons = [
  "../../images/1555703872_content.jpg",
  "../../images/Amen-Bank.jpg",
  "../../images/d609bae0cbfcd979b02de39375b962c4e14bf53f.png",
];

function Sponsors() {
  return (
    <div>
      <h1>Sponsored by.</h1>
      <ul>
        {spons.map((img, index) => {
          return (
            <li key={index}>
              <img> src = {img}</img>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sponsors;
