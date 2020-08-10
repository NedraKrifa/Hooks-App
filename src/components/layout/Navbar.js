import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler"
const Navbar = () => {
  return (
    <div className="navbar_style">
      <Link className="link_style" to="/">
        ABOUT
      </Link>
      <Link className="link_style" to="/">
        BLOG
      </Link>
      <Link className="link_style" to="/">
        VIDEOS
      </Link>
      <Link className="link_style" to="/compte">
        COMPTE
      </Link>
      <Link className="link_style" to="/">
        CONTACT
      </Link>
      <ThemeToggler />
    </div>
  );
};
export default Navbar;
