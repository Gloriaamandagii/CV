import Header from "./components/Header";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Portofolio from "./components/Portofolio";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Service />
      </main>

      <Portofolio />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
