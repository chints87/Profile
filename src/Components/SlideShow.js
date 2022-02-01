import React, { Component } from 'react';

import ArrowLeftSharpIcon from '@material-ui/icons/ArrowLeftSharp';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import styles from '../styles/SlideShow.module.css';

/* import SLIDESINFO from './SlideShow.data'; */

import Slides from './Slides';

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      /* touchStart: null,
      touchEnd: null, */
    };
  }

  componentDidMount() {
    console.log('in mount');
    this.runSlideShow = setInterval(() => {
      this.moveForward();
    }, 1117500);
  }

  componentWillUnmount() {
    console.log('in unmount');
    clearInterval(this.runSlideShow);
  }

moveForward = () => {
  let { activeSlide } = this.state;
  const { slides } = this.props;
  const slidesLength = slides.length;
  if (activeSlide === slidesLength - 1) {
    activeSlide = 0;
    this.setState({
      activeSlide,
    });
  } else {
    this.setState({
      activeSlide: activeSlide + 1,
    });
  }
}

moveBack = () => {
  let { activeSlide } = this.state;
  const { slides } = this.props;
  const slidesLength = slides.length;
  if (activeSlide === 0) {
    activeSlide = slidesLength - 1;
    this.setState({
      activeSlide,
    });
  } else {
    this.setState({
      activeSlide: activeSlide - 1,
    });
  }
};

slideNavigation = (index) => {
  let { activeSlide } = this.state;
  activeSlide = index;
  this.setState({
    activeSlide,
  });
};

// On mobile a device, the swipe action
// records the first point of touch
/* handleTouchStart = (e) => {
  let { touchStart } = this.state;
  touchStart = e.targetTouches[0].clientX;
  this.setState({
    touchStart,
  });
}; */

// On mobile device, the swipe action
// records the last point of touch
/* handleMove = (e) => {
  let { touchEnd } = this.state;
  touchEnd = e.targetTouches[0].clientX;
  this.setState({
    touchEnd,
  });
}; */

// On mobile device, this determines
// based on touchStart and touchEnd point
// whether the slider needs to move forward
// or backward
/* handleTouchEnd = () => {
  const { touchStart, touchEnd } = this.state;
  if (touchStart - touchEnd < -75) {
    this.moveBack();
  }
  if (touchStart - touchEnd > 75) {
    this.moveForward();
  }
} */

render() {
  const { activeSlide } = this.state;
  const {
    slides, type, arrowDesignRight, arrowDesignLeft,
  } = this.props;
  console.log(slides);
  return (
    <div
      className={styles.slideShow}
      /* onTouchStart={(e) => this.handleTouchStart(e)}
      onTouchEnd={() => this.handleTouchEnd()}
      onTouchMove={(e) => this.handleMove(e)} */
    >
      <div className={arrowDesignLeft ? styles[arrowDesignLeft] : styles.leftButton}>
        <ArrowLeftSharpIcon
          style={{fontSize: '32px'}}
          onClick={() => this.moveBack()}
        />
      </div>
      <div className={arrowDesignRight ? styles[arrowDesignRight] : styles.rightButton}>
        <ArrowRightSharpIcon
          style={{fontSize: '32px'}}
          onClick={() => this.moveForward()}
        />
      </div>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={index === activeSlide
            ? styles.slideActive : styles.slide}
        >
          {activeSlide === index
            ? <Slides content={slide} type={type} /> : null}
        </div>
      ))}
      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <div
            className={activeSlide === index ? styles.dotActive : styles.dot}
            key={slide.id}
            onClick={() => this.slideNavigation(index)}
          />
        ))}
      </div>
    </div>
  );
}
}

export default SlideShow;
