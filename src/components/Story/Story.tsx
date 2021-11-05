import React from "react";
import "./styles.css";
import story from "../../assets/story.png";
const Story = () => {
  return (
    <div id="STORY" className="story">
      <div className="story-left">
        <h2>The Story</h2>
        <p>
          6 Japan's legendary and well-know artist on the manga industry decided
          to anonymously release an unique collection of sexiest anime girls.
        </p>
        <p>
          Inspired by the manga, gaming & hentai industry these girls will
          reveal alot of suprise for the owners
        </p>
        <p>
          In fact, some surprise are about to be announced in order to reunite
          the holders in the worldwide.
        </p>
        <p>
          Solagirls team, will release the first hentai series with each of the
          character hold. That Hold your Solagirls NFT, and see her in her play
          in the series.
        </p>
      </div>
      <div className="story-right">
        <img src={story} alt="" />
      </div>
    </div>
  );
};

export default Story;
