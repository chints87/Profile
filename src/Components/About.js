import React from "react";

import styles from '../styles/About.module.css';

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  var bio = 
      <p>Having worked diverse cultures and fields, my experience brings a unique skill-set and 
        perspective when designing solutions over the web. <b className={styles.emphasize}>I work both as a designer and developer
        , which reduces the complexity of communication and faster turnaround time for you.</b>
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
              <h3>Get to know me!</h3>
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
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
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
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
            
          </div>
          
         
        
      
    </section>
  );
};

export default About;
