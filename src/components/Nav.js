import React, { useState, useEffect } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"></img> 
      <div className="nav_tabs">
        <ul>
          <li>
            <AnchorLink href="#favoriteMovies" className="nav_tab"> Favorite Movies </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#watchedMovies" className="nav_tab"> Watched Movies </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#watchList" className="nav_tab"> Watch List </AnchorLink>
          </li>
        </ul>
      </div> 
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo">
      </img>
    </div>
  );
}

export default Nav;
