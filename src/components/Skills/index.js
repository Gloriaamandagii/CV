import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "skills");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data);
    });
  }, []);

  return (
    <section id="skills" className="main-container">
      <h1 className="section-title">{skills.title}</h1>
      <div className="skills-grid">
        <div className="skills-left">
          <div className="education">
            <h4 className="education-title">{skills.edutitle1}</h4>
            <h4 className="education-years">{skills.eduyears1}</h4>
            <h4 className="education-title">{skills.edutitle2}</h4>
            <h4 className="education-years">{skills.eduyears2}</h4>
            <h4 className="education-title">{skills.edutitle3}</h4>
            <h4 className="education-years">{skills.eduyears3}</h4>
            <h4 className="education-title">{skills.edutitle4}</h4>
            <h4 className="education-years">{skills.eduyears4}</h4>
          </div>
        </div>
        <div className="skills-right">
          <p>{skills.subtitle}</p>
          <div className="skills-list">
            <ul>
              <li>{skills.list1}</li>
              <li>{skills.list2}</li>
              <li>{skills.list3}</li>
              <li>{skills.list4}</li>
              <li>{skills.list5}</li>
            </ul>
            <ul>
              <li>{skills.list6}</li>
              <li>{skills.list7}</li>
              <li>{skills.list8}</li>
              <li>{skills.list9}</li>
              <li>{skills.list10}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
