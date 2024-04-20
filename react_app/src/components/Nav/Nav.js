import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import NetFlixLogo from "../../images/NetFlixLogo.png";
import NetFlixAvatar from "../../images/NetflixAvatar.png";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to handle the dropdown visibility

  const NavBarVisibility = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", NavBarVisibility);

    return () => {
      window.removeEventListener("scroll", NavBarVisibility);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  return (
    <div className={`nav ${show ? "nav-black" : ""}`}>
      <Link to="/">
        <img src={NetFlixLogo} className="nav-logo" alt="Netflix Logo" />
      </Link>
      <div className="nav-item-container" onClick={toggleDropdown}>
        <img src={NetFlixAvatar} className="nav-avatar" alt="Avatar" />
        {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to="/questionnaire" className="dropdown-item">Watch Preferences</Link>
            <Link to="/logout" className="dropdown-item">Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
