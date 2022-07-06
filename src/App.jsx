import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div id="side-bar">
        <i class="bi bi-x-lg"></i>
        <a href="#">Accueil</a>
        <a href="#projects">Projets</a>
        <a href="#about">A propos</a>
      </div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
