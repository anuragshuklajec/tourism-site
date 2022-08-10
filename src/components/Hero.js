import React from "react";
import { Button } from "reactstrap";
import "../App.css";
import myLogo from "../img/UnvisitedLogo.png"

const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <img className ="header-logo" src={myLogo}/>
          <h3>Explore the Unexplored !</h3>
          <Button outline color="warning" href="#about">
            Explore More
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
