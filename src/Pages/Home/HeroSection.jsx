
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom'
export default function HeroSection() {
  const navigate = useNavigate();
  function ResumeButton (){
  navigate("/Resume");
  
  }
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aayush Dushane</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Passionate Web Developer specializing in full-stack solutions and innovative applications
            <br /> Continuously learning and applying new technologies to drive impactful solutions.
          </p>
        </div>
        <button className="btn btn-primary" onClick={ResumeButton}>Resume</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/her0.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
