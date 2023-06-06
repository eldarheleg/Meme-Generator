import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="navbar--picture"
        src="/images/troll-face.png"
        alt="Meme face"
      />
      <h2 className="navbar--title">Meme generator</h2>
      <h3 className="navbar--second--title">Project 3 - Meme generator</h3>
    </nav>
  );
}

export default Navbar;
