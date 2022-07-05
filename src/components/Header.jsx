import { useEffect, useState } from 'react';
import Lottie from 'lottie-web';

import NameAnimation from '../animations/name.json';

function Header() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('svg-container'),
      animationData: NameAnimation,
      loop: false,
    });
  }, []);

  return (
    <header>
      <div id="svg-container"></div>
      <div id="links">
        <a href="#">Accueil</a>
        <a href="#projects">Projets</a>
        <a href="#about">A propos</a>
      </div>
    </header>
  );
}

export default Header;
