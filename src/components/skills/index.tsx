import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJava, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  return (
    <section id="skills">
      <h2>💻 Skills</h2>
      <div className="skills-container">
        <div className="skill"><FontAwesomeIcon icon={faReact} /> React</div>
        <div className="skill"><FontAwesomeIcon icon={faNodeJs} /> Node.js</div>
        <div className="skill"><FontAwesomeIcon icon={faJava} /> Java (Spring)</div>
        <div className="skill"><FontAwesomeIcon icon={faDatabase} /> SQL</div>
        <div className="skill"><FontAwesomeIcon icon={faCss3Alt} /> CSS</div>
        <div className="skill"><FontAwesomeIcon icon={faHtml5} /> HTML</div>
      </div>
    </section>
  );
}