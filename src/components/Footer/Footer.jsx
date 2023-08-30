import React from "react";
import "./Footer.scss";

 
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Welcome to ModaMania</h1>
          <span>
          At ModaMania, we're passionate about fashion and committed to providing you with the best online shopping experience.
          
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Support: support@modamania.com

          Legal: legal@modamania.com

          
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ModaMania</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
