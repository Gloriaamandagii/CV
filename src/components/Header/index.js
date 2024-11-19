import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  return (
    <header>
      <div className="main-container">
        <div className="nav">
          <nav>
            <ul>
              <li>
                <a href="#services">{header.nav1}</a>
              </li>
              <li>
                <a href="#portfolio">{header.nav2}</a>
              </li>
              <li>
                <a href="#skills">{header.nav3}</a>
              </li>
              <li>
                <a href="#contact">{header.nav4}</a>
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
            <h3 className="pre-title">{header.pretitle}</h3>
            <h1 className="hero-name">{header.name}</h1>
            <p>{header.subtittle}</p>
          </div>
          <div className="hero-right">
            <img src={`data:image/jpeg;base64, ${header.profil}`} />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
