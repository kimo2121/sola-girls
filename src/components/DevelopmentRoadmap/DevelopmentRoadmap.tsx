import React from "react";
import "./styles.css";
import tick from "../../assets/tick.png";

const DevelopmentRoadmap = () => {
  return (
    <div id="DEVELOPMENT ROADMAP" className="development">
      <h1>
        Development <span>Roadmap</span>
      </h1>
      <div className="dev-roads">
        <div className="dev">
          <div className="dev-header">
            <h1>2021</h1>
            <span>Q4</span>
          </div>
          <div className="dev-container">
            <div className="single-dev-line">
              <img src={tick} alt="" />
              <p>
                The Sevens rarity data will be added to Rarity.tools as well as
                Rarity Sniper.
              </p>
            </div>
            <div className="single-dev-line">
              <img src={tick} alt="" />
              <p>An hentai manga book and series will be announce.</p>
            </div>
          </div>
        </div>
        <div className="dev">
          <div className="dev-header">
            <h1>2022</h1>
            <span>Q1</span>
          </div>
          <div className="dev-container">
            <div className="single-dev-line">
              <img src={tick} alt="" />
              <p>
                Season 1 of the Solagirls hentai video series will be launch.
                Only viewable by Solagirls NFT Holder.
              </p>
            </div>
            <div className="single-dev-line">
              <img src={tick} alt="" />
              <p>
                Each character will have a series point of view. Each series
                will be unique.
              </p>
            </div>
          </div>
        </div>
        <div className="dev">
          <div className="dev-header">
            <h1>2022</h1>
            <span>Q2</span>
          </div>
          <div className="dev-container">
            <div className="single-dev-line">
              <img src={tick} alt="" />
              <p>
                Free edition of 10,000 unique HENTAI MANGA BOOK and delivery for
                free at each Solagirls NFT holder during the snapshot.
              </p>
            </div>
            <div className="single-dev-line">
              <img src={tick} alt="" />
              <p>Season 2 of Solagirls.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentRoadmap;
