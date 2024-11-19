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
            <img src="./images/porto1.png" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>{portofolio.porto1title}</h4>
            <p>{portofolio.porto1subtitle}</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-cover">
            <img src="./images/porto3.jpeg" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>{portofolio.porto2title}</h4>
            <p>{portofolio.porto2subtitle}</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-cover">
            <img src="./images/porto2.jpeg" alt="Person Standing" />
          </div>
          <div className="portfolio-info">
            <h4>{portofolio.porto1title}</h4>
            <p>{portofolio.porto3subtitle}</p>
            <div className="portfolio-tags"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
