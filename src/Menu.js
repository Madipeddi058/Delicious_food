import React from 'react';
import img3 from "./images/Fooditems/meals.webp";
import img4 from "./images/Fooditems/biryani.webp";
import img5 from "./images/Fooditems/starters.webp";
import img6 from "./images/Fooditems/sandwich.webp";
import img7 from "./images/Fooditems/icecream.webp";

const Menu = () => {
  return (
    <div>
      <div id="itembox">
        <div className="items">
          <img
            className="itempic"
            src={img3}
            alt="meals" />
          <p>
            <b>MEALS</b>
          </p>
          <br />
          <button className="itembtm">
            <b>CLICK HERE</b>
          </button>
        </div>
        <div className="items">
          <img
            className="itempic"
            src={img4} alt="biryani" />
          <p>
            <b>BIRYANI</b>
          </p>
          <br />
          <button className="itembtm">
            <b>CLICK HERE</b>
          </button>
        </div>
        <div className="items">
          <img
            className="itempic"
            src={img5} alt="starters" />
          <br />
          <p>
            <b>STARTERS</b>
          </p>
          <br />
          <button className="itembtm">
            <b>CLICK HERE</b>
          </button>
          <br />
        </div>
        <div className="items">
          <img
            className="itempic"
            src={img6} alt="sandwich" />
          <br />
          <p>
            <b>SANDWICH</b>
          </p>
          <br />
          <button className="itembtm">
            <b>CLICK HERE</b>
          </button>
          <br />
        </div>
        <div className="items">
          <img
            className="itempic"
            src={img7} alt="icecream" />
          <br />
          <p>
            <strong>ICES-CREAMS</strong>
          </p>
          <br />
          <button className="itembtm">
            <b>CLICK HERE</b>
          </button>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Menu
