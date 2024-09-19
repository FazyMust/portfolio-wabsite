import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import project1 from '../assets/images/project1.jpg'

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const images = [project1] // Add more project images to this array

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
                className='img-fluid rounded-3'
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  )
}
