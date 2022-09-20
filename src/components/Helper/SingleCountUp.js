import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const SingleCountUp = (props) => {
  const {countUpValue, suffix, title} = props;
  return (
    <>
      <div className="single-countUp-wrapper">
          <h4>
              <TrackVisibility once>
                  {({ isVisible }) => (
                      <div>
                          {isVisible ? <CountUp duration={5} end={countUpValue} /> : 0}
                          <span>{suffix}</span>
                      </div>
                  )}
              </TrackVisibility>
          </h4>
          <h6>{title}</h6>
      </div>
    </>
  );
};

export default SingleCountUp;
