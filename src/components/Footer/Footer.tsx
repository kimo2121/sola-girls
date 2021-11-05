import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import telegram from "../../assets/telegram.png";
import earth from "../../assets/earth.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={logo} alt="" />
        <span>press@solagirls.com</span>
        <span>©2021 by SOLAGRILS</span>
        <div className="footer-social">
          <img src={twitter} alt="" />
          <img src={discord} alt="" />
          <img src={telegram} alt="" />
        </div>
      </div>
      <div className="footer-down">
        <div>
          <a href="">Terms of Service</a>
          <a href="">Privacy policy</a>
          <a href="">Help Center</a>
        </div>
        <div>
          <img src={earth} alt="" />
          <span>EN</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
