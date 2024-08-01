import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import OurStory from "./Pages/OurStory";
import Contact from "./Pages/Contact";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
