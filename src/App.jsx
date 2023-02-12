import React from "react";

import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Prizes from "./Components/Prizes/Prizes";
import Register from "./Components/Register/Register";
import Schedule from "./Components/Schedule/Schedule";
import Sponsors from "./Components/Sponsors/Sponsors";
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
     

      <Footer />
    </div>
  );
}

export default App;
