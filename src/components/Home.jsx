import React, { useEffect } from 'react'

import img from '../images/fred.png'
import react from '../images/react-rond.png'
import lazy from '../images/fred-lazy.png'

function Home() {
  useEffect(() => {
    const spans = document.querySelectorAll('.welcome')

    let char = 0
    let timer = setInterval(onTick, 50)

    function onTick() {
      const span = spans[char]
      span.classList.remove('hidden')
      char++
      if (char === spans.length) {
        complete()
        return
      }
    }

    function complete() {
      clearInterval(timer)
      timer = null
    }

    setTimeout(() => {
      document.querySelector('h2').classList.add('welcome-infinite')
    }, 1000)
  })
  return (
    <section id="home">
      <div className="section section__hidden home" id="home-content">
        <div className="quarter-home">
          <img
            className="lazy-img"
            src={lazy}
            alt="photo de frédéric"
            data-src={img}
          />
        </div>
        <div className="half-home">
          <div className="column-wrapper">
            <h2>
              <div className="highlights welcome hidden">W</div>
              <div className="highlights welcome hidden">e</div>
              <div className="highlights welcome hidden">l</div>
              <div className="highlights welcome hidden">c</div>
              <div className="highlights welcome hidden">o</div>
              <div className="highlights welcome hidden">m</div>
              <div className="highlights welcome hidden">e</div>
              <div className="highlights welcome hidden">&nbsp;</div>
              <div className="highlights welcome hidden">!</div>
            </h2>
            <h1>
              Je suis Frédéric Ferreira, <br />
              développeur Front End<span> ReactJS</span>.
            </h1>
            <img src={react} alt="react-logo" />
            <p id="job">
              Actuellement employé chez &nbsp;
              <a target="_blank" href="https://www.loopsider.com/fr">
                Loopsider
              </a>
              , média avec plus de 1,6M de followers sur facebook.
            </p>
            <div className="wrapper">
              <p>
                Projets &nbsp;<a href="#projects">&#8594;</a>
              </p>
              <p>
                Contact &nbsp;<a href="#contact">&#8594;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
