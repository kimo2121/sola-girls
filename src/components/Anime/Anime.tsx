import React from "react";
import "./styles.css";
import anime from "../../assets/anime.png";
const Anime = () => {
  return (
    <div id="SALE" style={{ backgroundColor: "#ffbee6" }}>
      <div className="anime">
        <div className="anime-left">
          <h1>
            Animal Girl's
            <br />
            <span>love NFT</span>
          </h1>
          <span className="available">Available</span>
          <h2>0/10000</h2>
          <span className="price-ann">
            Price:
            <span className="available"> to be announced</span>
          </span>
          <br />
          <button className="public-sale">Public Sale</button>
        </div>
        <div className="anime-right">
          <img src={anime} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Anime;
