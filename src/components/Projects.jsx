import memory from '../videos/memory.mp4';
import shoepify from '../videos/shoepify.mp4';
import todo from '../videos/todo.mp4';
import weather from '../videos/weather.mp4';

import afaire from '../images/afaire.png';
import shoepi from '../images/shoepi.png';
import meteo from '../images/meteo.png';

import github from '../images/github.png';
import netlify from '../images/netlify.png';

function Projects() {
  const autoPlay = (e) => {
    e.target.play();
  };

  const stopPlay = (e) => {
    e.target.pause();
  };

  return (
    <div id="projects">
      <div className="section section__hidden" id="projects-title">
        <p>
          Durant mon apprentissage, j'ai eu l'occasion de travailler
          sur de multiples projets ... mais il y a quatre d'entre eux
          sur lesquels j'ai porté une attention plus particulière.
        </p>
      </div>
      <div className="section section__hidden" id="projects-content">
        <ul>
          <li>
            <video onMouseEnter={autoPlay} onMouseLeave={stopPlay}>
              <source src={memory} />
            </video>
            <div className="row-wrapper">
              <a
                className="github"
                target="_blank"
                href="https://github.com/Frederic-Ferreira/memory-card-app"
              >
                <img src={github} alt="lien github" />
              </a>
              <a
                className="netlify"
                target="_blank"
                href="https://memory-card-by-fred.netlify.app/"
              >
                <img src={netlify} alt="lien du preview de l'app" />
              </a>
            </div>
          </li>
          <li>
            <video
              onMouseEnter={autoPlay}
              onMouseLeave={stopPlay}
              poster={shoepi}
            >
              <source src={shoepify} />
            </video>
            <div className="row-wrapper">
              <a
                className="github"
                target="_blank"
                href="https://github.com/Frederic-Ferreira/shoepify-app"
              >
                <img src={github} alt="lien github" />
              </a>
              <a
                className="netlify"
                target="_blank"
                href="https://shoepify-app-by-fred.netlify.app/"
              >
                <img src={netlify} alt="lien du preview de l'app" />
              </a>
            </div>
          </li>
          <li>
            <video
              onMouseEnter={autoPlay}
              onMouseLeave={stopPlay}
              poster={meteo}
            >
              <source src={weather} />
            </video>
            <div className="row-wrapper">
              <a
                className="github"
                target="_blank"
                href="https://github.com/Frederic-Ferreira/weather-app"
              >
                <img src={github} alt="lien github" />
              </a>
              <a
                className="netlify"
                target="_blank"
                href="https://weather-meteo-by-fred.netlify.app/"
              >
                <img src={netlify} alt="lien du preview de l'app" />
              </a>
            </div>
          </li>
          <li>
            <video
              onMouseEnter={autoPlay}
              onMouseLeave={stopPlay}
              poster={afaire}
            >
              <source src={todo} />
            </video>
            <div className="row-wrapper">
              <a
                className="github"
                target="_blank"
                href="https://github.com/Frederic-Ferreira/todo-list-app"
              >
                <img src={github} alt="lien github" />
              </a>
              <a
                className="netlify"
                target="_blank"
                href="https://todo-list-by-fred.netlify.app/"
              >
                <img src={netlify} alt="lien du preview de l'app" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
