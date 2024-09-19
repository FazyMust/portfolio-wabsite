import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Stats() {
  return (
    <section className="stats py-5 text-bg-secondary">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end  border-dark">
              <FontAwesomeIcon
              icon={faUser}
              className="fa-3x mb-3"
              />
              <p className="fs-1">500+</p>
              <h3 className="fs-6 text-uppercase">Clints</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end  border-dark">
              <FontAwesomeIcon
              icon={faProjectDiagram}
              className="fa-3x mb-3"
              />
              <p className="fs-1">700+</p>
              <h3 className="fs-6 text-uppercase">Projects</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end  border-dark">
              <FontAwesomeIcon
              icon={faClock}
              className="fa-3x mb-3"
              />
              <p className="fs-1">16+</p>
              <h3 className="fs-6 text-uppercase">Years</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end  border-dark">
              <FontAwesomeIcon
              icon={faBook}
              className="fa-3x mb-3"
              />
              <p className="fs-1">25</p>
              <h3 className="fs-6 text-uppercase">Publications</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center border-end  border-dark">
              <FontAwesomeIcon
              icon={faYoutube}
              className="fa-3x mb-3"
              />
              <p className="fs-1">2.06M</p>
              <h3 className="fs-6 text-uppercase">Subscribers</h3>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="stat text-center">
              <FontAwesomeIcon
              icon={faGraduationCap}
              className="fa-3x mb-3"
              />
              <p className="fs-1">1M+</p>
              <h3 className="fs-6 text-uppercase">Students</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
