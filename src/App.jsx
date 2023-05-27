import React from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <main>
      <section>
        <img
          src="./assets/images/home-top.png"
          alt="decorative-charcoal-banner"
        />
        <h1 className="title">CHARLES E. KEEBLE</h1>
        <h3 className="subtitle">THE LAST COPYWRITER YOU'LL EVER HIRE!</h3>
        <Navbar />
        <img
          src="./assets/images/home-bottom.png"
          alt="decorative-charcoal-banner"
        />
      </section>
    </main>
  );
};

export default App;
