import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">Accueil</Link>
        <Link to="/">Projets</Link>
        <Link to="/">Contact</Link>
      </div>
    </header>
  );
}

export default Header;
