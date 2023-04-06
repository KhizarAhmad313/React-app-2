import React from "react";
import Linkedin from "./Components/Linkedin";
import Github from "./Components/Github";
import Twitter from "./Components/Twitter";
import Instagram from "./Components/Instagram";
import Facebook from "./Components/Facebook";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Linkedin />
      <Github />
      <Twitter />
      <Instagram />
      <Facebook />
    </div>
  );
}

export default App;
