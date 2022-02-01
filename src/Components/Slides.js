import React from 'react';

import LandingPageSlides from './LandingPageSlides';


const Slides = ({ content, type }) => {
  switch (type) {
    case 'Landing Page':
      return (
        <LandingPageSlides
          content={content}
        />
      );
    default:
      return (
        <LandingPageSlides
          content={content}
        />
      );
  }
};

export default Slides;
