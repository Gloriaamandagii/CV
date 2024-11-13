const App = () => {
  return (
    <div>
      {"{"}/* Header */{"}"}
      <header>
        <div className="main-container">
          <div className="nav">
            <div className="logo">
              <a href="/">DA</a>
            </div>
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
                <li>
                  <a href="resume.pdf" target="_blank">
                    <button className="btn">Resume</button>
                  </a>
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
                Creative front-end developer with more than +5 years of
                experience in enterprise companies and startups. Proficient in
                Javascript and React. Passionate about UI/UX
              </p>
            </div>
            <div className="hero-right">
              <img src="images/hero.svg" alt="Person Standing" />
            </div>
          </section>
        </div>
      </header>
      {"{"}/* Main Content */{"}"}
      <main>
        {"{"}/* Services Section */{"}"}
        <section id="services" className="main-container">
          <h3 className="pre-title">Services</h3>
          <h1 className="section-title services-title">Specialized In</h1>
          <div className="grid-3">
            {"{"}/* Service 1 */{"}"}
            <div className="service">
              <div className="service-icon">
                {"{"}/* SVG Icon here */{"}"}
              </div>
              <h4>UI/UX Design</h4>
              <p>Turn your vision into reality on any platform.</p>
            </div>
            {"{"}/* Service 2 */{"}"}
            <div className="service">
              <div className="service-icon">
                {"{"}/* SVG Icon here */{"}"}
              </div>
              <h4>Application Development</h4>
              <p>
                Design, build, and implement applications with documentation.
              </p>
            </div>
            {"{"}/* Service 3 */{"}"}
            <div className="service">
              <div className="service-icon">
                {"{"}/* SVG Icon here */{"}"}
              </div>
              <h4>Web Development</h4>
              <p>Create and maintain your websites with optimal performance.</p>
            </div>
          </div>
        </section>
        {"{"}/* Portfolio Section */{"}"}
        <section id="portfolios" className="main-container">
          <h3 className="pre-title">My Works</h3>
          <h1 className="section-title">Featured Portfolios</h1>
          <div className="grid-3">
            {"{"}/* Portfolio 1 */{"}"}
            <div className="portfolio">
              <div className="portfolio-cover">
                <img src="portfolio/portfolio-1.png" alt="Portfolio 1" />
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
            {"{"}/* Portfolio 2 */{"}"}
            <div className="portfolio">
              <div className="portfolio-cover">
                <img src="portfolio/portfolio-2.png" alt="Portfolio 2" />
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
            {"{"}/* Portfolio 3 */{"}"}
            <div className="portfolio">
              <div className="portfolio-cover">
                <img src="portfolio/portfolio-3.jpeg" alt="Portfolio 3" />
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
        {"{"}/* Skills &amp; Education Section */{"}"}
        <section id="skills" className="main-container">
          <h3 className="pre-title">Learning Path</h3>
          <h1 className="section-title">Skills &amp; Education</h1>
          <div className="skills-grid">
            <div className="skills-left">
              {"{"}/* Education 1 */{"}"}
              <div className="education">
                <h4 className="education-title">Kingston University</h4>
                <p>Master's Degree - Software Engineering</p>
                <h4 className="education-years">2019-2023</h4>
              </div>
              {"{"}/* Add other education entries similarly */{"}"}
            </div>
            <div className="skills-right">
              <p>For 5+ years, I have been continuously learning...</p>
              <div className="skills-list">
                <ul>
                  <li>React Js</li>
                  <li>Node JS</li>
                  <li>MongoDB</li>
                  <li>HTML</li>
                  <li>Vue JS</li>
                </ul>
                <ul>
                  <li>CSS</li>
                  <li>Typescript</li>
                  <li>Next JS</li>
                  <li>GraphQL</li>
                  <li>Angular JS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      {"{"}/* Footer */{"}"}
      <footer id="contact" className="main-container">
        <div className="contact">
          <div className="contact-left">
            <form
              className="contact-form"
              action="https://formspree.io/f/xzbllrrq"
              method="POST"
            >
              <input type="text" placeholder="Name" name="name" />
              <input type="email" placeholder="Email" name="email" />
              <textarea
                name="message"
                placeholder="Message"
                cols={30}
                rows={10}
                defaultValue={""}
              />
              <button className="btn-submit">Send Message</button>
            </form>
          </div>
          <div className="contact-right">
            {"{"}/* Contact Details Here */{"}"}
            <div className="contact-item">
              <div className="contact-item-icon">
                {"{"}/* SVG Icon here */{"}"}
              </div>
              <div className="contact-item-detail">
                <h4>Address</h4>
                <p>3424 Layman Avenue, Fayetteville, NC</p>
              </div>
            </div>
            {"{"}/* Add other contact items similarly */{"}"}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
