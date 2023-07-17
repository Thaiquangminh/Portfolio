import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" loading="lazy" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Years Working</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a skilled and passionate Front End Developer with 1 years of experience in creating visually appealing and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I possess expertise in translating design concepts into functional and responsive web interfaces. I am dedicated to delivering high-quality code and optimizing website performance to enhance the overall user experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
