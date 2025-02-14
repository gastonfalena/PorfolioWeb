import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Header() {
  return (
    <div className='container'>
      <div className='item'>
        <img className='imagen' src='/Me.png' alt='Gastón Falena' />
      </div>
      <div>
        <div className='item name'>Gastón Falena</div>
        <div className='item talent'>Desarrollador de Software</div>
        <div className="links">
          <a href="https://www.linkedin.com/in/gaston-falena/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/gastonfalena" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}