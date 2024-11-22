/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=""/>
          <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
              <p>SF-03 A block <br/> Ajantha Vihar Apartment</p>
              <p>Tel:6361015856 <br/>Email:bcpranav2003@gmail.com</p>
              <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
              <p></p>
          </div>
      </div>
    </div>
  )
}

export default Contact