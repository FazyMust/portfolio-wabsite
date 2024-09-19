import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faBuilding } from '@fortawesome/free-regular-svg-icons/faBuilding'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

export default function Profile() {
  return (
      <section className='profile my-6'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h3 className='text-uppercase fw-bold'>Profile</h3>
              <p>
                Here is some more info about myself to help you get to know me
                better.
              </p>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item mb-3'>
                  <h5 className='text-transform'>
                    <FontAwesomeIcon icon={faUser} className='text-primary' />{' '}
                    Full Name :
                  </h5>
                  <p>Fazian Mustafa</p>
                </li>
                <li className='list-group-item mb-3'>
                  <h5 className='text-transform'>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className='text-primary'
                    />
                  </h5>{' '}
                  Birth Date:
                  <p> July 12 1995</p>
                </li>
                <li className='list-group-item mb-3'>
                  <h5 className='text-transform'>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className='text-primary'
                    />
                  </h5>{' '}
                  Current Position:
                  <p>Intern at GMZ</p>
                </li>
                <li className='list-group-item mb-3'>
                  <h5 className='text-transform'>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className='text-primary'
                    />
                  </h5>{' '}
                  Website:
                  <p>kryptohive.net</p>
                </li>
                <li className='list-group-item mb-3'>
                  <h5 className='text-transform'>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className='text-primary'
                    />
                  </h5>{' '}
                  Email:
                  <p>Fazymust@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <h3 className='text-uppercase fw-bold'>Skills</h3>
              <p>
                Here are the list of my skills with those Domb percentages that
                dont mean anything{' '}
              </p>

              {/* HTML */}
              <h5>
                <FontAwesomeIcon icon={faCheck} /> HTML 5
              </h5>
              <div
                className='progress mb-4'
                role='Progressbar'
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={90}
              >
                <div className='progress-bar' style={{width: '90%'}}>90%</div>
              </div>

              {/* Css */}
              <h5>
                <FontAwesomeIcon icon={faCheck} /> CSS
              </h5>
              <div
                className='progress mb-4'
                role='Progressbar'
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={70}
              >
                <div className='progress-bar' style={{width: '70%'}}>70%</div>
              </div>

              {/* JS */}
              <h5>
                <FontAwesomeIcon icon={faCheck} /> Javascript
              </h5>
              <div
                className='progress mb-4'
                role='Progressbar'
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={40}
              >
                <div className='progress-bar' style={{width: '40%'}}>40%</div>
              </div>

              {/* Bootstrap */}
              <h5>
                <FontAwesomeIcon icon={faCheck} /> Bootstrap
              </h5>
              <div
                className='progress mb-4'
                role='Progressbar'
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={60}
              >
                <div className='progress-bar' style={{width: '60%'}}>60%</div>
              </div>

              {/* Php */}
              <h5>
                <FontAwesomeIcon icon={faCheck} /> PHP
              </h5>
              <div
                className='progress mb-4'
                role='Progressbar'
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={10}
              >
                <div className='progress-bar' style={{width: '10%'}}>10%</div>
              </div>

              {/* Wordpress */}
              <h5>
                <FontAwesomeIcon icon={faCheck} /> Wordpress
              </h5>
              <div
                className='progress mb-4'
                role='Progressbar'
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={70}
              >
                <div className='progress-bar' style={{width: '70%'}}>70%</div>
              </div>

              {/* UI/UX */}
              <h5>
                <FontAwesomeIcon icon={faCheck} /> UI/UX
              </h5>
              <div
                className='progress mb-4'
                role='Progressbar'
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={40}
              >
                <div className='progress-bar' style={{width: '40%'}}>40%</div>
              </div>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-12">
              <button href="#" className="btn btn-outline-dark btn-lg text-uppercase px-5 mx-3 my-2">Hire me now</button>
              <button href="#" className="btn btn-dark btn-lg text-uppercase px-5 mx-3 my-2">Downloard CV</button>
            </div>
          </div>
        </div>
      </section>
  )
}
