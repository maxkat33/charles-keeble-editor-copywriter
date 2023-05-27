import React from "react";

const Navbar = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <nav style={styles}>
      <a href="../About/about.html">ABOUT</a>
      <a href="../About/about.html">SERVICES</a>
      <a href="../About/about.html">REVIEWS</a>
      <a href="../About/about.html">CONTACT</a>
    </nav>
  );
};

export default Navbar;
