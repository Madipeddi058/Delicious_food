import React from 'react'
import './App.css';
import img1 from "./images/chef.png";
import img2 from "./images/bgimage.jpg";
import img3 from "./images/Fooditems/meals.webp";
import img4 from "./images/Fooditems/biryani.webp";
import img5 from "./images/Fooditems/starters.webp";
import img6 from "./images/Fooditems/sandwich.webp";
import img7 from "./images/Fooditems/icecream.webp";
import img8 from "./images/socialmedia/facebook.webp";
import img9 from "./images/socialmedia/instagram.webp";
import img10 from "./images/socialmedia/twitter.webp";
import img11 from "./images/socialmedia/whatsapp.webp";

function Home() {
  return (
    <><><><>
    {/* <div id="firstdiv">
    // //   <h1 style={{ marginLeft: "0px" }} className="topnav">
    // //     <b className="Delicious1">DELICIOUS </b>
    // //     <b className="food2">FOOD</b>
    // //     <img
    //       className="chefp"
    //       src={img1} alt="chef" />
    //     <div className="anchor">
    //         <Navbar />
    //     </div>
    //   </h1>
    // </div> */}
      <div className="main">
        <img style={{}}
          src={img2} alt="div2 bgimage"  />
        <div className="middle-left">
          <p className="bigtext">
            <b className="Delicious">DELICIOUS </b>
            <b className="food">FOOD</b>
          </p>
          <p className="smalltext">Feel Like a Home,Taste like a Paradise.....</p>
          <button className="itembtm2">
            <a style={{ textDecoration: "none", color: "black" }} href="#itembox">
              Order Now
            </a>
          </button>
          <button style={{ marginLeft: 10 }} className="itembtm2">
            Book a Table
          </button>
        </div>
      </div></>

      {/* third division */}

      <div id="chef">
        <img
          className="chefphoto"
          src={img1} alt="chef" />
        <div className="passage">
          <p>
            <b>About</b>
            <br />
            <br />
            Delicious food has the remarkable ability to captivate
            <br />
            our senses and transport us to a realm of pure culinary delight.
            <br />
            It is a sensory symphony, where taste, aroma, texture, and <br />
            presentation converge to create an experience that lingers in our memory.
            <br />
            <br />
            The first encounter often begins with the enticing aroma that wafts from
            the kitchen, gently beckoning us to the table. It's a prelude to the
            culinary adventure that awaits. The sight of a beautifully plated dish, a
            work of art in its own right, is a feast for the eyes. Every element, from
            the vibrant colors to the meticulous arrangement, hints at the thought and
            care that went into its creation.
            <br />
            When that first bite meets the palate, it's a revelation. Delicious food
            dances on the taste buds, delivering a harmonious blend of flavors. Sweet,
            salty, sour, bitter, and umami come together in perfect balance, creating
            a taste sensation that is nothing short of extraordinary. Each ingredient,
            whether it's the tenderness of the protein, the freshness of the
            vegetables, or the depth of the sauce, plays a crucial role in this
            gastronomic performance.
            <br />
            <br />
            Texture adds another layer of enjoyment. Crispy, crunchy, velvety, or
            tender—these sensations enhance the overall experience. The interplay of
            textures in a dish can be as important as the flavors themselves,
            elevating the enjoyment to new heights. <br />
            <br />
          </p>
        </div>
      </div></>
      {/* forth div */}
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
      </div></><div id="lastdiv">
        <div className="last">
          <p>
            <b>About</b>
          </p>
          <p>
            <a style={{ textDecoration: "none", color: "black" }} href="#firstdiv">
              Home
            </a>
          </p>
          <p>Menu</p>
          <p>Log out</p>
        </div>
        <div className="last">
          <p>
            <b>Timings</b>
          </p>
          <label htmlFor="time">Mon - Sun (11am - 10:30pm)</label>
        </div>
        <div className="last">
          <p>
            <b>Follow Us</b>
          </p>
          <label htmlFor="">
            <a href="https://web.whatsapp.com/">
              <img
                className="socialmedia1"
                src={img11}
                alt="whatsapp" />
            </a>
          </label>
          <label htmlFor="">
            <a href="https://www.instagram.com/">
              <img
                className="socialmedia"
                src={img9}
                alt="Instagram" />
            </a>
          </label>
          <label htmlFor="">
            <a href="https://www.facebook.com/">
              <img
                className="socialmedia"
                src={img8}
                alt="facebook" />
            </a>
          </label>
          <label htmlFor="">
            <a href="https://www.twitter.com/">
              <img
                className="socialmedia"
                src={img10}
                alt="twitter" />
            </a>
          </label>
        </div>
        <div className="last">
          <p>
            <b>Address</b>
          </p>
          <label htmlFor="time">D-mart opposite, Medipally, Hyderabad, 500098.</label>
        </div>
        <br />
      </div></>
  )
}

export default Home
