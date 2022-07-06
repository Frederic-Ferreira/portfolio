import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';

function App() {
  const handleClick = (e) => {
    const overlay = document.getElementById('side-bar');
    const contains = overlay.classList.contains('hidden')
      ? 'hidden'
      : 'visible';
    const add = overlay.classList.contains('hidden')
      ? 'visible'
      : 'hidden';

    document.querySelector('.bi').classList.toggle('active');
    overlay.classList.remove(contains);
    overlay.classList.add(add);
  };

  return (
    <div className="App">
      <div className="hidden" id="side-bar">
        <a onClick={handleClick} href="#">
          Accueil
        </a>
        <a onClick={handleClick} href="#projects">
          Projets
        </a>
        <a onClick={handleClick} href="#about">
          A propos
        </a>
      </div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
