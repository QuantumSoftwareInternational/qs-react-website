import React from 'react';
import header from '../img/header.jpg';
import './Header.css';
const Header = () => {
  // return <img className="headerImage" src={header} alt="header" />;
  return (
    <div className="headerImage">
      <div class="hero ">
        <h2>QUANTUM SOFTWARE CAN HELP YOU BRING </h2>
        <h2>YOUR IDEAS TO REALITY</h2>
        <span class="line hero-line " />
        <p>
          We can help you build better websites using the latest technologies
          and frameworks!
        </p>
        <a class="btn-info " href="# ">
          FIND OUT MORE
        </a>
      </div>
    </div>
  );
};

export default Header;
