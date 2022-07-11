import React from 'react';

import img from '../images/fred.png';
import lazy from '../images/fred-lazy.png';

function Home() {
  return (
    <section id="home">
      <div className="section section__hidden" id="home-content">
        <img
          className="lazy-img"
          src={lazy}
          alt="photo de frédéric"
          data-src={img}
        />
        <div className="column-wrapper">
          <h2>Welcome!</h2>
          <p>
            Bienvenue sur mon site professionnel, je m'appelle
            Frédéric Ferreira et je suis un développeur{' '}
            <span>Front End</span> junior, spécialisé dans le
            framework <span>React</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
