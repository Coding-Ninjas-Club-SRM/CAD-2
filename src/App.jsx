import React from "react";

import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Prizes from "./Components/Prizes/Prizes";
import Sponsors from "./Components/Prizes/Sponsors";
import Register from "./Components/Register/Register";
import Schedule from "./Components/Tracks/Schedule";
import Tracks from "./Components/Tracks/Tracks";

function App() {
  return (
    <div>
      <Navbar />

      <Landing />
      <About />
      <Register />
      <Schedule />
      <Tracks />
      <Sponsors />
      <Prizes />

      <Footer />
    </div>
  );
}

export default App;
