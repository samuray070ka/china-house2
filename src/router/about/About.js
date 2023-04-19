import React from 'react'
import "./About.css"
import aboutImg1 from "../../assets/bg3.jpg"
import aboutImg2 from "../../assets/bg4.jpg"
import aboutImg3 from "../../assets/bg5.jpg"

function About() {
  return (
    <div className='about'>
      <h1 className='about__logo'>Biz haqimizda</h1>
      <div className='about__box'>
        <div className='about__child'>
          <img className='about__img' src={aboutImg1} alt="" />
        </div>
        <div className='about__child2'>
          <h3 className='about__logo2'>Global House</h3>
          <p className='about__p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nam, corrupti quam, et sequi temporibus quisquam saepe perspiciatis impedit eius mollitia magnam voluptas, minima distinctio voluptate. Nihil, velit. Laboriosam, velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque adipisci ipsa labore itaque officia. Natus rem doloremque modi porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis perferendis, vero eveniet minima similique cumque iste nesciunt voluptate totam! Corrupti animi ducimus, aperiam hic possimus voluptas? Quos necessitatibus officia molestiae.</p>
        </div>
      </div>
      <div className='about__box'>
        <div className='about__child3'>
          <h3 className='about__logo2'>Retail Center</h3>
          <p className='about__p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nam, corrupti quam, et sequi temporibus quisquam saepe perspiciatis impedit eius mollitia magnam voluptas, minima distinctio voluptate. Nihil, velit. Laboriosam, velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque adipisci ipsa labore itaque officia. Natus rem doloremque modi porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quibusdam deleniti, rerum vero provident ex, doloribus eius maiores error aperiam corrupti reiciendis praesentium maxime sed quaerat modi fugit ab aspernatur!.</p>
        </div>
        <div className='about__child4'>
          <img className='about__img' src={aboutImg2} alt="" />
        </div>
      </div>
      <div className='about__box'>
        <div className='about__child'>
          <img className='about__img' src={aboutImg3} alt="" />
        </div>
        <div className='about__child2'>
          <h3 className='about__logo2'>Shox Saroy</h3>
          <p className='about__p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nam, corrupti quam, et sequi temporibus quisquam saepe perspiciatis impedit eius mollitia magnam voluptas, minima distinctio voluptate. Nihil, velit. Laboriosam, velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque adipisci ipsa labore itaque officia. Natus rem doloremque modi porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates laborum, maxime doloremque dignissimos, placeat alias praesentium similique harum delectus odio debitis voluptas beatae vitae. Corrupti itaque saepe sequi optio corporis!</p>
        </div>
      </div>
    </div>
  )
}

export default About