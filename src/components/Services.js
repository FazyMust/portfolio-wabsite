import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Services() {
  return (
    <section className='services text-bg-dark py-5 position-relative'>
      <div className='container position-relative'>
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">
            Services
          </h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">What can i do for you</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id laboriosam incidunt at, illo maiores.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <FontAwesomeIcon
            icon={faGlobe}
              className='fa-3x text-primary mb-3'
            />
            <h3 className="fs-3">Web Design</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At facere repellat ea tenetur exercitationem quis ut quos placeat ad dolores.</p>
          </div>
          <div className="col-md-4 text-center">
            <FontAwesomeIcon
            icon={faCode}
              className='fa-3x text-primary mb-3'
            />
            <h3 className="fs-3">Web Development</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum. Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.</p>
          </div>
          <div className="col-md-4 text-center">
            <FontAwesomeIcon
            icon={faShoppingCart}
              className='fa-3x text-primary mb-3'
            />
            <h3 className="fs-3">Advertising and SEO</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum. Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.</p>
          </div>        </div>
      </div>
    </section>
  )
}
