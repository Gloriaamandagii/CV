import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Service = () => {
  const [service, setService] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const serviceRef = ref(db, "service");
    onValue(serviceRef, (snapshot) => {
      const data = snapshot.val();
      setService(data);
    });
  }, []);

  return (
    <section id="services" className="main-container">
      <h1 className="section-title services-title">{service.title}</h1>
      <div className="grid-3">
        <div className="service">
          <h4>{service.interest1}</h4>
        </div>

        <div className="service">
          <h4>{service.interest2}</h4>
        </div>
        <div className="service">
          <h4>{service.interest3}</h4>
        </div>
      </div>
    </section>
  );
};

export default Service;
