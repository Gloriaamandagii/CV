import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Portofolio = () => {
  const [portofolio, setPortofolio] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const portofolioRef = ref(db, "portofolio");
    onValue(portofolioRef, (snapshot) => {
      const data = snapshot.val();
      setPortofolio(data);
    });
  }, []);

  return (
    <section id="portofolio" className="main-container">
      <h1 className="section-title">{portofolio.title}</h1>
      <div className="grid-3">
        <div className="portfolio">
          <div className="portfolio-cover">
            <img src={`data:image/jpeg;base64, ${portofolio.foto1}`} />
          </div>
          <div className="portfolio-info">
            <h4>{portofolio.porto1title}</h4>
            <p>{portofolio.porto1subtitle}</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-cover">
            <img src={`data:image/jpeg;base64, ${portofolio.foto2}`} />
          </div>
          <div className="portfolio-info">
            <h4>{portofolio.porto3title}</h4>
            <p>{portofolio.porto3subtitle}</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-cover">
            <img src={`data:image/jpeg;base64, ${portofolio.foto3}`} />
          </div>
          <div className="portfolio-info">
            <h4>{portofolio.porto1title}</h4>
            <p>{portofolio.porto2subtitle}</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
