const Portofolio = () => {
  return (
    <section id="portofolio" className="main-container">
      <h3 className="pre-title">My Works</h3>
      <h1 className="section-title">Featured Portfolios</h1>
      <div className="grid-3">
        <div className="portfolio">
          <div className="portfolio-cover">
            <img src="./images/porto1.jpg" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>Agency Website</h4>
            <p>Lorem ipsum dolor sit...</p>
            <div className="portfolio-tags">
              <div>React</div>
              <div>Tailwind</div>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-cover">
            <img src="./images/porto1.jpg" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>Landing Page</h4>
            <p>Lorem ipsum dolor sit...</p>
            <div className="portfolio-tags">
              <div>Vue</div>
              <div>Contentful</div>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-cover">
            <img src="./images/porto1.jpg" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>Dashboard Admin</h4>
            <p>Lorem ipsum dolor sit...</p>
            <div className="portfolio-tags">
              <div>React</div>
              <div>Materialize</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
