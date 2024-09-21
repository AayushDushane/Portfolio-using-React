export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/aayush.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <h1 className="section--title">About</h1> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">

            Aspiring Software Engineer with a passion for developing scalable and efficient software solutions.
            Currently pursuing a BTech in Computer Science and Engineering at Medi-Caps University, Indore.
            Proficient in Python, C++, JavaScript, and web development frameworks such as React.js and Express.js.
            Enthusiastic about learning new technologies and tackling complex problems.

          </p>
          <p className="hero--section-description">
          With proven experience in developing web applications and personal projects, I demonstrate strong problem-solving abilities
          and technical skills. Actively seeking opportunities to contribute to impactful projects and further develop my 
          software engineering expertise.
          </p>
          <p className="hero--section-description">
          In addition to my technical pursuits, I enjoy playing video games, watching movies, going to the gym, and playing cricket.
          </p>
        </div>
      </div>
    </section>
  );
}
