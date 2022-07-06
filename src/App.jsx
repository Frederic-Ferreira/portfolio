import Header from './components/Header';
import Main from './components/Main';

function App() {
  const handleClick = () => {
    const overlay = document.getElementById('side-bar');
    const contains = overlay.classList.contains('hidden')
      ? 'hidden'
      : 'visible';
    const add = overlay.classList.contains('hidden')
      ? 'visible'
      : 'hidden';

    document.querySelector('.bi-list').classList.toggle('active');
    overlay.classList.remove(contains);
    overlay.classList.add(add);
  };

  return (
    <div className="App">
      <div className="hidden" id="side-bar">
        <i onClick={handleClick} class="bi bi-x-lg"></i>
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
