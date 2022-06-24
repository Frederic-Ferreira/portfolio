import memory from '../videos/memory.mp4';
import shoepify from '../videos/shoepify.mp4';
import todo from '../videos/todo.mp4';
import weather from '../videos/weather.mp4';

import afaire from '../images/afaire.png';
import shoepi from '../images/shoepi.png';
import meteo from '../images/meteo.png';

function Projects() {
  const autoPlay = (e) => {
    e.target.play();
  };

  const stopPlay = (e) => {
    e.target.pause();
  };

  return (
    <div id="projects">
      <div className="section section--hidden" id="projects-content">
        <ul>
          <li>
            <video onMouseEnter={autoPlay} onMouseLeave={stopPlay}>
              <source src={memory} />
            </video>
          </li>
          <li>
            <video
              onMouseEnter={autoPlay}
              onMouseLeave={stopPlay}
              poster={shoepi}
            >
              <source src={shoepify} />
            </video>
          </li>
          <li>
            <video
              onMouseEnter={autoPlay}
              onMouseLeave={stopPlay}
              poster={meteo}
            >
              <source src={weather} />
            </video>
          </li>
          <li>
            <video
              onMouseEnter={autoPlay}
              onMouseLeave={stopPlay}
              poster={afaire}
            >
              <source src={todo} />
            </video>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
