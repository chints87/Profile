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
      <p>Having worked in diverse cultures and fields, my experience brings a unique skill-set and 
        perspective when designing solutions over the web. <b className={styles.emphasize}>I work both as a designer and developer
        , which reduces the complexity of communication and faster turnaround time for you.</b><br />
        I will brainstorm with you to get your understanding of the market and objectives of your app. 
        The sketching process technique assimilate findings to develop overall and specific workflows
        that is followed by developing lower-fidelity protoptyes. These are then futher developed into a 
        higher-fidelty prototype to give a feel and look for the application. 
        Once the designs are finalized, these are coded and brought to life
      </p>   

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
                  <p className="address">
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
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
