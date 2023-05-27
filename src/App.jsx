import React from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <main>
      <section>
        <h1 className="title">CHARLES E. KEEBLE</h1>
        <h3 className="subtitle">THE LAST COPYWRITER YOU'LL EVER HIRE!</h3>
        <Navbar />
        <img src="./assets/images/home-bottom.png" />
      </section>
    </main>
  );
};

export default App;
