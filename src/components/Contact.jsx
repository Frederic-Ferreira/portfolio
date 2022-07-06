import lazy from '../images/lazy-profile.jpg';
import img from '../images/profile.jpg';

import js from '../images/js.png';
import sass from '../images/sass.png';
import redux from '../images/redux.png';
import react from '../images/react.png';
import vite from '../images/vite.png';

import mac from '../images/macbook-pro.png';
import code from '../images/code.png';
import vcontrol from '../images/merge.png';

function Contact() {
  return (
    <div className="section section__hidden" id="about">
      <div id="skills-set">
        <div id="skills">
          <h1>Compétences</h1>
          <p>
            <img src={js} alt="logo javascript" /> Vanilla{' '}
            <span className="bold">JavaScript</span>
          </p>
          <p>
            <img src={sass} alt="logo sass" /> Préprocesseur :
            <span className="bold">Sass</span>
          </p>
          <p>
            <img src={redux} alt="logo redux" /> Architecture de code
            : <span className="bold">Redux</span> ou{' '}
            <span className="bold">Model View Controller</span>
          </p>
          <p>
            <img src={react} alt="logo react" />
            Framework : <span className="bold">ReactJS</span>
          </p>
          <p>
            <img src={vite} alt="logo vite (module bundler)" /> Module
            Bundler :<span className="bold">Vite</span> (sait utiliser
            WebPack et Parcel)
          </p>
        </div>
        <div id="setup">
          <h1>Setup</h1>
          <p>
            <img src={mac} alt="macbook" /> Ordinateur :{' '}
            <span className="bold">MacBook Pro 2020</span>
          </p>
          <p>
            <img src={code} alt="editeur de code" /> Editeur :{' '}
            <span className="bold">Visual Studio Code</span>
          </p>
          <p>
            {' '}
            <img src={vcontrol} alt="version control system" />{' '}
            Version Control : <span className="bold">Git</span> &&
            <span className="bold">GitHub</span>
          </p>
        </div>
      </div>
      <div id="contact">
        <img
          className="lazy-img"
          src={lazy}
          alt="photo de frédéric"
          data-src={img}
        />
        <div id="text">
          <h2>Informations</h2>
          <div id="infos">
            <p>
              <span>Téléphone :</span> 06.13.25.52.89
            </p>
            <p>
              <span>E-mail :</span> fred.69780@hotmail.fr
            </p>
            <p>
              <span>GitHub :</span>{' '}
              <a
                target="_blank"
                href="https://github.com/Frederic-Ferreira"
              >
                https://github.com/Frederic-Ferreira
              </a>
            </p>
            <p>
              <span>Linkedin :</span>{' '}
              <a
                target="_blank"
                href="https://linkedin.com/in/frederic-ferreira-developpeur"
              >
                https://linkedin.com/in/frederic-ferreira-developpeur
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
