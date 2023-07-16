import React from "react";
import "./home.scss";

const Home = () => {
  return <section className="home">
    <div className="secContainer container">
      <div className="homeText">
        <h1 className="title">
          Plan your trip With Travel Dot
        </h1>
        <p className="subTitle">
          Travel to your favourite city with respectful of the environment!
        </p>
        <button className="btn">
          <a href="#">Explore No</a>
        </button>
      </div>
    </div>
  </section>;
};

export default Home;
