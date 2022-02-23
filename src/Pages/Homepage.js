import React, { useEffect, useState } from "react";

import Header from "../Components/Header";

import About from "../Components/About";
import Contact from "../Components/Contact";
import Portfolio from "../Components/Portfolio";

const HomePage = () => {
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
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Portfolio data={resumeData.main} />  
      <Contact data={resumeData.main} />
    </div>
  );
};

export default HomePage;