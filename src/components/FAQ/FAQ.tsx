import React from "react";
import "./styles.css";
import faq from "../../assets/faq.png";
const FAQ = () => {
  return (
    <div id="FAQ" className="faq">
      <h1>
        <span>Dear holder,</span> What To Know.
      </h1>
      <div className="faq-container">
        <h1>F.A.Q</h1>
        <div className="faq-inner">
          <div className="faq-left">
            <div>
              <h3>What is the total supply?</h3>
              <p>
                A total of 10,000 unique Solagirls NFTs will be created and
                Distributed .
              </p>
            </div>
            <div>
              <h3>When is the launch?</h3>
              <p>We will launch on September 20, 7PM UTC.</p>
            </div>
            <div>
              <h3>How much does it cost to mint an NFT?</h3>
              <p>To be announced.</p>
            </div>
            <div>
              <h3>Will there be a pre-sale?</h3>
              <p>No Pre-sale it’s a fair launch </p>
            </div>
            <small>
              Have more questions? Come through to our Discord to learn more.
            </small>
          </div>
          <div className="faq-right">
            <img src={faq} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
