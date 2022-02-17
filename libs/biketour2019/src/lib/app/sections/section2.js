import React from 'react';
import fourth from '../img/journey/4.jpg';

export default () => (
  <section className="js-section" data-zoom-start="2.5" data-stay="true">
    <h2>
      <span className="title-up">
        Address: 266 Skillman Ave, Brooklyn, NY 11211
      </span>
      <span className="title-down">Red Shed Garden</span>
    </h2>
    <a href="https://redshedgarden.com/">redshedgarden.com</a>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <figure>
      <div className="js-gallery-content">
        <img alt="Sixth Pic" src="img/journey/6.jpg" />
        <img alt="Fourth Pic" src={fourth} />
        <img alt="Eleventh Pic" src="img/journey/11.jpg" />
        <img alt="Eigth Pic" src="img/journey/8.jpg" />
      </div>
      <figcaption>
        An unexpected turn in our journey led us to many impressive places.
      </figcaption>
    </figure>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </section>
);
