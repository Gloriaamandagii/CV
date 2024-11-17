import heroImage from "./images/hero.jpeg";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Portofolio from "./components/Portofolio";
import Service from "./components/Service";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h1 className="section-title services-title">Interested In</h1>
        <div className="grid-3">
          <div className="service">
            <h4>Web Development</h4>
            <p>Turn your vision into reality on any platform.</p>
          </div>

          <div className="service">
            <h4>Application Development</h4>
            <p>Design, build, and implement applications with documentation.</p>
          </div>
          <div className="service">
            <h4>Front-End Development</h4>
            <p>Create and maintain your websites with optimal performance.</p>
          </div>
        </div>
        <Service />
      </main>

      <Portofolio />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
