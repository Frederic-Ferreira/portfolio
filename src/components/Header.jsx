import { useEffect, useState } from 'react';
import Lottie from 'lottie-web';

import NameAnimation from '../animations/name.json';

function Header() {
  const handleClick = (e) => {
    const overlay = document.getElementById('side-bar');
    const contains = overlay.classList.contains('hidden')
      ? 'hidden'
      : 'visible';
    const add = overlay.classList.contains('hidden')
      ? 'visible'
      : 'hidden';

    e.target.classList.toggle('active');
    overlay.classList.remove(contains);
    overlay.classList.add(add);
  };

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
        <i onClick={handleClick} className="bi bi-list"></i>
      </div>
    </header>
  );
}

export default Header;
