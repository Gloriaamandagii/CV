const Header = () => {
  return (
    <header>
      <div className="main-container">
        <div className="nav">
          <nav>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="burger">
            <div className="line-1" />
            <div className="line-2" />
            <div className="line-3" />
          </div>
        </div>
        <section id="hero">
          <div className="hero-left">
            <h3 className="pre-title">My name is</h3>
            <h1 className="hero-name">
              Gloria <span>Mandagi</span>
            </h1>
            <p>
              Saya adalah memiliki minat besar di bidang pengembangan web,
              aplikasi mobile, dan front-end development. Saya suka belajar
              mengembangkan keterampilan dalam JavaScript dan React untuk
              menciptakan aplikasi dan website yang efektif dan berkualitas.
            </p>
          </div>
          <div className="hero-right">
            <img src="./images/hero.jpeg" alt="Person Standing" />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
