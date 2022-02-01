import React from 'react';



import styles from '../styles/LandingPageSlides.module.css';

const LandingPageSlides = ({
  content,
}) => {
  console.log(content)
  return (
    <div className={styles.slide}>
      <img className={styles.image} src={content.image} alt=""/>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>{content.title}</h3>
        <div className={styles.cardDescription}>{content.description}</div>
      </div>
    </div>

  );
};



export default LandingPageSlides;
