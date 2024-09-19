// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons/faChevronCircleDown'


import Typewriter from './Typewriter'

export default function Header() {
  return (
    <header className='header vh-100 text-center position-relative'>
      <div className='text-container position-relative d-flex flex-column justify-content-center align-item-center h-100'>
        <h5 className='text-primary fs-3 fw-bold text-uppercase'>
          Hello World.
        </h5>
        <h1 id='typing-text' className='display-1 fw-bold text-white'>
          <Typewriter text='I am Faizan Mustafa.' speed={100} />
        </h1>

        <p className='roles text-white text-uppercase fs-3 fs-md-4'>
          <span>Full Stack Web Developer | </span>
          <span>Online Educator</span>
        </p>

        <a href='#about' className='btn btn-outline-light btn-lg mt-3 mx-auto'>
          <div className='d-flex'>
            <div className='me-3'>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </div>
            <div className='text-start'>
              <span>More About me</span>
            </div>
          </div>
        </a>

        <div className='social d-flex gap-3 position-absolute start-50 translate-middle-x'>
          <a href='https://twitter.com/'>
            <FontAwesomeIcon
              icon={faTwitter}
              className='fa-3x text-white hover-effect'
            />
          </a>
          <a href='https://www.instagram.com/'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='fa-3x text-white hover-effect'
            />
          </a>
          <a href='https://www.linkedin.com/'>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className='fa-3x text-white hover-effect'
            />
          </a>
          <a href='https://www.facebook.com/'>
            <FontAwesomeIcon
              icon={faFacebook}
              className='fa-3x text-white hover-effect'
            />
          </a>
          <a href='https://www.youtube.com/'>
            <FontAwesomeIcon
              icon={faYoutube}
              className='fa-3x text-white hover-effect'
            />
          </a>
          <a href='https://github.com/'>
            <FontAwesomeIcon
              icon={faGithub}
              className='fa-3x text-white hover-effect'
            />
          </a>
        </div>
      </div>
    </header>
  )
}
