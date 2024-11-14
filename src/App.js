import heroImage from "./images/hero.jpeg";

const App = () => {
  return (
    <div>
      <header>
        <div className="main-container">
          <div className="nav">
            <div className="logo">
              <a href="/">GM</a>
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
                  <a
                    href="resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                Javascript and React. Passionate about UI/UX.
              </p>
            </div>
            <div className="hero-right">
              <img src={heroImage} alt="Person Standing" />
            </div>
          </section>
        </div>
      </header>

      <main>
        <section id="services" className="main-container">
          <h3 className="pre-title">Services</h3>
          <h1 className="section-title services-title">Specialized In</h1>
          <div className="grid-3">
            <div className="service">
              <div className="service-icon" />
              <h4>UI/UX Design</h4>
              <p>Turn your vision into reality on any platform.</p>
            </div>

            <div className="service">
              <div className="service-icon" />
              <h4>Application Development</h4>
              <p>
                Design, build, and implement applications with documentation.
              </p>
            </div>
            <div className="service">
              <div className="service-icon" />
              <h4>Web Development</h4>
              <p>Create and maintain your websites with optimal performance.</p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="main-container">
          <h3 className="pre-title">My Works</h3>
          <h1 className="section-title">Featured Portfolios</h1>
          <div className="grid-3">
            <div className="portfolio">
              <div className="portfolio-cover">
                <img src={heroImage} alt="Person Standing" />
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
                <img src={heroImage} alt="Person Standing" />
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
                <img src={heroImage} alt="Person Standing" />
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

        <section id="skills" className="main-container">
          <h3 className="pre-title">Learning Path</h3>
          <h1 className="section-title">Skills & Education</h1>
          <div className="skills-grid">
            <div className="skills-left">
              <div className="education">
                <h4 className="education-title">Klabat University</h4>
                <h4 className="education-years">2022-Now</h4>
                <h4 className="education-title">SMA Negeri 1 Tomohon</h4>
                <h4 className="education-years">2019-2021</h4>
                <h4 className="education-title">SMP Negeri 1 Tomohon</h4>
                <h4 className="education-years">2017-2020</h4>
                <h4 className="education-title">SD Gmim 4 Tomohon</h4>
                <h4 className="education-years">2010-2016</h4>
              </div>
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

      <footer id="contact" className="main-container">
        <div className="contact">
          <div className="contact-left">
            <h3 className="pre-title">Contact Me</h3>
            <form
              className="contact-form"
              action="https://formspree.io/f/xzbllrrq"
              method="POST"
            >
              <input type="text" placeholder="Your Name" name="name" required />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                cols="30"
                rows="10"
                required
              />
              <button className="btn-submit" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-right">
            <h3 className="pre-title">Get In Touch</h3>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-4h2v4h-2zm0-6.5V7h2v3h-2z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Location</h4>
                <p>3424 Layman Avenue, Fayetteville, NC</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17v-6h2v6h-2zm0-8V7h2v3h-2z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+123456789">+1 (234) 567-890</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17v-6h2v6h-2zm0-8V7h2v3h-2z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Email</h4>
                <p>
                  <a href="mailto:email@example.com">email@example.com</a>
                </p>
              </div>
            </div>

            {/* Additional Social Media Links */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46A1.77 1.77 0 0 0 1.77 24h20.46a1.77 1.77 0 0 0 1.77-1.77V1.77A1.77 1.77 0 0 0 22.23 0zM12 17.56c-3.06 0-5.56-2.5-5.56-5.56s2.5-5.56 5.56-5.56 5.56 2.5 5.56 5.56-2.5 5.56-5.56 5.56zm0-8.56c-1.66 0-3.06 1.34-3.06 3.06s1.34 3.06 3.06 3.06 3.06-1.34 3.06-3.06-1.34-3.06-3.06-3.06zm7.47 4.56h-1.62c-.25 0-.46.2-.46.46v3.16h2.08l-.27 2.21h-1.81v5.75c0 1.17-.97 2.13-2.13 2.13h-3.85c-1.17 0-2.13-.97-2.13-2.13v-5.75h-1.81v-2.21h1.81v-3.16c0-2.42 1.38-3.99 3.61-3.99h2.79v2.22h-1.84c-.92 0-1.67.75-1.67 1.67v2.22h3.36z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>LinkedIn</h4>
                <p>
                  <a
                    href="https://www.linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/username
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17v-6h2v6h-2zm0-8V7h2v3h-2z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>GitHub</h4>
                <p>
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/username
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
