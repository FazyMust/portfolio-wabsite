import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  return (
    <section className='contact text-bg-dark bg-gradient py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <div className='text-center mb-5'>
              <h4 className='text-uppercase fw-bold text-primary'>Contact</h4>
              <hr className='w-25 mx-auto' />
              <h2 className='mb-4'>I'd love to hear from you.</h2>
              <p className='lead'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                ipsa quae ea voluptatum ducimus necessitatibus?
              </p>
            </div>

            {/* Form */}
            <form action=''>
              <div className='mb-5'>
                <input
                  type='text'
                  className='form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white'
                  placeholder='Name'
                />
              </div>
              <div className='mb-5'>
                <input
                  type='email'
                  className='form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white'
                  placeholder='Email'
                />
              </div>
              <div className='mb-5'>
                <textarea
                  className='form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white'
                  placeholder='Message'
                ></textarea>
              </div>
              <div className='mb-5 d-grid'>
                <button type='submit' className='btn btn-primary'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='d-flex mt-5'>
          <p className='flex-grow-1'>
            Copyright &copy; 2024 | Design by StyleShout
          </p>
          <div className='hstack gap-3'>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} className='text-white fa-2x' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitch} className='text-white fa-2x' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='text-white fa-2x' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='text-white fa-2x' />
            </a>
            <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faYoutube} className='text-white fa-2x' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
