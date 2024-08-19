import React from "react";

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
      <nav>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;

