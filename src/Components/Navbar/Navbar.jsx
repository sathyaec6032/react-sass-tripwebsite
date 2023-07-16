import React, { useState } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./navbar.scss";

const Navbar = () => {
  //Code to toggle/show navBar

  const [active, setActive] = useState("navBar");
  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };

  //Code to remove navbar
  const removeNavbar = () => {
    setActive("navBar");
  };


  return (
    <section className="navbarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <SiYourtraveldottv className="icon" />
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn">
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
