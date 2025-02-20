import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
 
export default function Footer() {
    const scrollToTop = () => {
        const targetElement = document.querySelector(".container");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <footer className="footer">
    <div className="container5">
    <div className="links2">
                  <a href="https://www.linkedin.com/in/gaston-falena/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://github.com/gastonfalena" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
      <p className='copy'>Copyright © {new Date().getFullYear()} Gastón Falena</p>
  
    </div>
    <button className="scroll-to-top" onClick={scrollToTop}>
        <img src='volver-arriba.png'  alt="Volver arriba" className="scroll-icon"/>
      </button>
  </footer>
  )
}
