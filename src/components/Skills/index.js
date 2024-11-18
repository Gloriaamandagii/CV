const Skills = () => {
  return (
    <section id="skills" className="main-container">
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
          <p>
            Selama lebih dari 2 tahun, saya aktif belajar dan mendalami bidang
            ini dan terus meningkatkan kemampuan saya.
          </p>
          <div className="skills-list">
            <ul>
              <li>React Js</li>
              <li>Node JS</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Typescript</li>
            </ul>
            <ul>
              <li>Mysql</li>
              <li>Unity</li>
              <li>Linux Ubuntu</li>
              <li>Linux Centos</li>
              <li>Blender</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
