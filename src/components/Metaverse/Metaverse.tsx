import React from "react";
import metaverse from "../../assets/metaverse.png";
import "./styles.css";
const Metaverse = () => {
  return (
    <div id="METAVERSE" className="meta-verse">
      <h1 className="meta-verse-title">
        <span>The most</span> hottest NFT <span>Art in the</span> metaverse
      </h1>
      <div className="meta-container">
        <div className="meta-left">
          <h1>
            <span>WELCOME</span> TO THE <span>METAVERSE.</span>
          </h1>
          <p>unique art handmade by Japan's finest artist</p>
          <ul>
            <li>10,000 unique NFT</li>
            <li>15 different perfect stuff</li>
            <li>Rarest and high demanded NFT</li>
          </ul>
          <img src={metaverse} alt="" />
        </div>
        <div className="meta-right">
          <h2>Overview</h2>
          <p>
            Solagirls is a collection of 10,000 algorithmically generated pieces
            of art with references from hentai, anime, games, and movies.
          </p>
          <p>
            The collection focuses on high-end sexy stuff and iconic gaming
            reference. The collection will be unique and will be discontinued.
          </p>
          <p>
            The Solagirls team will release an hentai and manga of Solagirls.
          </p>
          <p>
            All the girls will be gathered in a series where each NFT will allow
            you to access the point of view of the character you own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
