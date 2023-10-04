import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const addLinks = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ));
  return <nav>{addLinks}</nav>;
}

export default NavBar;
