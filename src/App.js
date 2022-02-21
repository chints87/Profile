import React, { useEffect, useState } from "react";

import HomePage from './Pages/Homepage';
import {Routes,  Route } from "react-router-dom";
import ProjectDetails from "./Components/ProjectDetails";

// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Portfolio from "./Components/Portfolio";

// import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={ <HomePage data={resumeData.main} />} />
            <Route path="/projects/:title" element={<ProjectDetails />} />
      </Routes>     
    </div>
  );
};

export default App;
