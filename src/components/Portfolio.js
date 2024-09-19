import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'
import project3 from '../assets/images/project3.jpg'
import project4 from '../assets/images/project4.jpg'
import project5 from '../assets/images/project5.jpg'
import project6 from '../assets/images/project6.jpg'

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)

  const images = [
    { src: project1 },
    { src: project2 },
    { src: project3 },
    { src: project4 },
    { src: project5 },
    { src: project6 }
  ] // Add more project images to this array

  return (
    <section className='portfolio py-5 bg-light'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h4 className='text-uppercase fw-bold text-primary'>Portfolio</h4>
          <hr className='w-25 mx-auto' />
          <h2 className='mb-4'>ChecckOut my Work</h2>
          <p className='lead'>Here is a small sample of my project</p>
        </div>
        <div className='row'>
          <div className='col-md-6 mb-4'>
            <div className='project shadow-lg rounded-5'>
              <img
                src={project1}
                alt='Projects'
                data-title='Project 1'
                className='img-fluid rounded-3'
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>

          <div className='col-md-6 mb-4'>
            <div className='project shadow-lg rounded-5'>
              <img
                src={project2}
                alt='Projects'
                data-title='Loop Studios Website'
                className='img-fluid rounded-3'
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>

          <div className='col-md-6 mb-4'>
            <div className='project shadow-lg rounded-5'>
              <img
                src={project3}
                alt='Projects'
                data-title='Shortly Website'
                className='img-fluid rounded-3'
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>

          <div className='col-md-6 mb-4'>
            <div className='project shadow-lg rounded-5'>
              <img
                src={project4}
                alt='Projects'
                data-title='Flyo Website'
                className='img-fluid rounded-3'
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>

          <div className='col-md-6 mb-4'>
            <div className='project shadow-lg rounded-5'>
              <img
                src={project5}
                alt='Projects'
                data-title='Bookmark Website'
                className='img-fluid rounded-3'
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>

          <div className='col-md-6 mb-4'>
            <div className='project shadow-lg rounded-5'>
              <img
                src={project6}
                alt='Projects'
                data-title='Grid Layout Website'
                className='img-fluid rounded-3'
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <Lightbox open={isOpen} close={() => setIsOpen(false)} slides={images} />
    </section>
  )
}
