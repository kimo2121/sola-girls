import React from "react";
import SolaSlider from "../Slider/Slider";
import "./styles.css";
const MintComponent: React.FC = () => {
  return (
    <div id="MINT" className="mint-component">
      <div className="left-part">
        <h1>
          Solana Girls
          <br />
          <span>Love NFT.</span>
        </h1>
        <p>
          10,000 unique and hand design anime girl collectibles by legendary
          manga artist that will be revealing after the minting.
        </p>
        <p>
          The first hentai anime manga & series that you can have access with
          your NFT
        </p>
        <p>
          All the girls will be gathered in a series where each NFT will allow
          you to access the point of view of the character you own.l
        </p>
        <button className="mint-btn">MINT YOUR NFT</button>
      </div>
      <div className="right-part">
        <SolaSlider />
      </div>
    </div>
  );
};

export default MintComponent;
