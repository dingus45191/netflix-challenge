import React, { useEffect, useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.screenY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);
  return (
    <div className={"navbar"}>
      <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nedpoulter.com%2Fwp-content%2Fuploads%2F2015%2F01%2FNetflix-logo.png&f=1&nofb=1"
            alt="netflix"
            className="navbar__logo"
          />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mwnI-qZ3xHBoFPwkIk9YVQHaE7%26pid%3DApi&f=1"
            alt="avatar"
            className="navbar__avatar"
          />
        </div>
      </div>
    </div>
  );
};
