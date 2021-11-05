import React, { useState } from "react";
import "./navbar.css";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <div className={state ? "slider-menu active" : "slider-menu"}>
          <Close onClick={() => setstate(false)} className="icon-close" />
          <Link
            to="MINT"
            duration={800}
            onClick={() => setstate(false)}
            smooth={true}
          >
            MINT
          </Link>
          <Link
            to="METAVERSE"
            duration={800}
            onClick={() => setstate(false)}
            smooth={true}
          >
            METAVERSE
          </Link>
          <Link
            to="STORY"
            duration={800}
            onClick={() => setstate(false)}
            smooth={true}
          >
            STORY
          </Link>
          <Link
            to="FAQ"
            duration={800}
            onClick={() => setstate(false)}
            smooth={true}
          >
            FAQ
          </Link>
          <Link
            to="LAUNCH ROADMAP"
            duration={800}
            onClick={() => setstate(false)}
            smooth={true}
          >
            LAUNCH ROADMAP
          </Link>
          <Link
            to="DEVELOPMENT ROADMAP"
            duration={800}
            onClick={() => setstate(false)}
            smooth={true}
          >
            DEVELOPMENT ROADMAP
          </Link>
          <Link
            to="SALE"
            duration={800}
            onClick={() => setstate(false)}
            smooth={true}
          >
            SALE
          </Link>
        </div>
        <button className="connect-btn">CONNECT WALLET</button>
        <Menu onClick={() => setstate(true)} className="icon-menu" />
      </div>
    </div>
  );
};

export default Navbar;
