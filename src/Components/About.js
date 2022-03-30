import React from "react";

import styles from '../styles/About.module.css';

const About = ({ data }) => {

  if (data) {
    var techSkills = data.resume.techSkills;
    var softSkills = data.resume.softSkills;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  var bio = 
      <p>
        <b className={styles.emphasize}>I have an entrepreneurial spirit that seeks to create, using logic and creativity. 
        The process of developing solutions through web applications gives me that satisfaction to create.
        Not only has this deepened my curiosity to explore broader topics and learn about relevant areas in depth,
        but has driven me to experiment, investigate and push boundaries.</b>
        <br></br>
        As a designer and developer working with you, I will brainstorm with you to get your understanding 
        of the market and objectives of your app. The sketching process technique assimilates findings 
        to develop overall and specific workflows that is followed by developing lower-fidelity prototypes. 
        These are then further developed into a higher-fidelty prototype to give a feel and look for the application. 
        Once the designs are finalized, these are coded and brought to life.      
      </p>
   
  const mailWindow = () => {
    window.open('mailto:info@handforhandmade.com', '_blank');
  };

  return (
    <section id="about">      
        <h2 className={styles.heading}>About Me</h2>
          <div className={styles.aboutSection}>
            <div className={styles.about}>
              <h3 className={styles.subheader}>Get to know me!</h3>
              <p className={styles.bio}>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2 className={styles.contactDetails}>Contact :</h2>
                  <p className="address"  onClick={() => mailWindow()}>
                    <span className={styles.email}>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} target="_blank" rel="noreferrer" className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.about}>
              <h3>My skills</h3>
              <div className={styles.skills}>
                 {techSkills ? techSkills.map((skill) => (<p key={skill.name} className={styles.chip}>{skill.name}</p>)): null}
              </div>
              <h3>Soft skills</h3>
              <div className={styles.skills}>
                  {softSkills? softSkills.map((skill) => (<p key={skill.name} className={styles.chip}>{skill.name}</p>)): null} 
              </div>              
            </div>            
          </div>     
    </section>
  );
};

export default About;
