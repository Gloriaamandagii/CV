const Portofolio = () => {
  return (
    <section id="portofolio" className="main-container">
      <h1 className="section-title">Projects</h1>
      <div className="grid-3">
        <div className="portfolio">
          <div className="portfolio-cover">
            <img src="./images/porto1.png" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>Unity 3D Game</h4>
            <p>Roll a Ball</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-cover">
            <img src="./images/porto3.jpeg" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>Blender 3D</h4>
            <p>Cyberpunk night city</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-cover">
            <img src="./images/porto2.jpeg" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>Visual Studio</h4>
            <p>Dekstop Application Inventory Alaise</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
