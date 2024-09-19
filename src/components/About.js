import profileImage from '../assets/images/faizan.jpg'

export default function About() {
  return (
      <section id='about' className='about bg-light py-5'>
        <div className='container'>
          <div className='text-center'>
            <h4 className='text-uppercase fw-bold text-primary'>About Me</h4>
            <hr className='w-25 mx-auto' />
            <h2 className='mb-4'>Let me introduce myself.</h2>
          </div>
          <div className='about-content d-flex gap-5 align-items-center h-100'>
            <img
              src={profileImage}
              alt='Profile'
              className='about-img img-fluid rounded-circle'
            />
            <p className='lead'>I am a Web Designer by Profession</p>
          </div>
        </div>
      </section>
  )
}
