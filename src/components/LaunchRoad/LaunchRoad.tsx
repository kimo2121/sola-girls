import React from "react";
import "./styles.css";
import tick from "../../assets/tick.png";

const LaunchRoad = () => {
  return (
    <div id="LAUNCH ROADMAP" className="launch-road">
      <h1>
        Launch <span>Roadmap</span>
      </h1>
      <div className="la-roads">
        <div className="each-road">
          <h1>10%</h1>
          <div>
            <h4>Love and Sweet</h4>
            <p>
              The sexiest hentai anime girl on the NFT industry will start to
              spread love.
            </p>
            <p>
              Will you be one of 70 lucky community members to receive an
              airdropped of a special sexy NFT item.
            </p>
            <p>
              <img src={tick} alt="" /> <small> All done!</small>
            </p>
          </div>
        </div>
        <div className="each-road2">
          <div>
            <h4>The First Hints</h4>
            <p>
              NFT item of previous generations will be sent to 70 lucky
              community members. Rumours are, these sketches provide some secret
              information and will be precious for the future of Solagirls.
            </p>
          </div>
          <h1>25%</h1>
        </div>
        <div className="each-road3">
          <h1>50%</h1>
          <div>
            <h4>Who Dis?</h4>
            <p>
              A mysterious section will be add on the website and it shows up in
              the metaverse. Solagirls holder will get some informations about
              it.
            </p>
          </div>
        </div>
        <div className="each-road4">
          <div>
            <h4>Announcement & begining of the story</h4>
            <p>Things will start and the story of Solagirls will begin.</p>
            <p>
              As holders of an unique hentai anime girl collection handmade by 6
              well know famous artist in the Manga industry. You’ll be able to
              enter in the private section of Solagirls.
            </p>
            <p>
              This section will only let enter Solagirls NFT holder by metamask
              verification.
            </p>
          </div>
          <h1>100%</h1>
        </div>
      </div>
    </div>
  );
};

export default LaunchRoad;
