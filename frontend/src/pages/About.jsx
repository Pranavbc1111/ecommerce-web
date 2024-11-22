/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur, qui fuga rem dignissimos officiis at, repellendus blanditiis aspernatur reprehenderit eum recusandae tempore mollitia! Dolorem itaque distinctio doloribus sapiente facere?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum perferendis omnis illo error eius corporis alias. Explicabo, modi nam? Dicta, commodi ex quae illum repellendus sunt iure voluptatem quidem.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate perspiciatis aut sunt magni itaque praesentium inventore, modi nulla vitae fugit doloribus voluptates, nemo saepe vero commodi consectetur facilis, natus est!</p>
          </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm md-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We meticulously select and vet each product to ensure it meets our standard</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>With our user friendly interface and hassle-free ordering process,shopping etc</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you the way,ensuring your satisfaction is our top priority</p>
        </div>

      </div>
      <NewsletterBox/>
      
    </div>
   
  )
}

export default About