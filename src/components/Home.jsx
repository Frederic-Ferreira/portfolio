import React from 'react';

import img from '../images/img.jpg';
import lazy from '../images/lazy-img.png';

function Home() {
  return (
    <section class="home">
      <div className="section section--hidden" id="home-content">
        <img
          className="lazy-img"
          src={lazy}
          alt="photo de frédéric"
          data-src={img}
        />
        <div className="column-wrapper">
          <h2>Hello there!</h2>
          <p>
            Bienvenue sur mon site professionnel, je m'appelle
            Frédéric Ferreira et je suis un développeur{' '}
            <span className="highlight">Front End junior</span>,
            spécialisé dans le framework{' '}
            <span className="highlight">React</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
