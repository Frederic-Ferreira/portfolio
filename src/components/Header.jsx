function Header() {
  const handleClick = (e) => {
    const overlay = document.getElementById("side-bar");
    const contains = overlay.classList.contains("hidden")
      ? "hidden"
      : "visible";
    const add = overlay.classList.contains("hidden") ? "visible" : "hidden";

    e.target.classList.toggle("active");
    overlay.classList.remove(contains);
    overlay.classList.add(add);
  };

  return (
    <header>
      <div className="header-container">
        <div id="name">
          <p>
            Frédéric Ferreira <span>.</span>
          </p>
        </div>
        <div id="links">
          <a className="nav home" href="#">
            Accueil
          </a>
          <a className="nav projects" href="#projects">
            Projets
          </a>
          <a className="nav contact" href="#about">
            A propos
          </a>
          <i onClick={handleClick} className="bi bi-list"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
