import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo sequi illum reprehenderit minima alias praesentium! Quam consequuntur sequi eius illum impedit. Temporibus laudantium perspiciatis quibusdam vitae tempore aut nostrum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolore dolorum nobis ducimus. Corporis ex, ad perspiciatis quibusdam architecto consequatur beatae molestias ipsam animi reprehenderit soluta ducimus vel, iste qui.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem itaque sequi iusto velit illum fugiat aliquam repellat exercitationem, assumenda libero aspernatur nemo quisquam optio, nisi temporibus quos, eligendi inventore.</p>
           </div>
      </div>

      <div className='text-xl py-4 '>
         <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our straingent quality standards</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>With our user-friendly interface and hassel -free ordering process, shopping has never been easier</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Our tem of dedicated professionals is here to assit you the way,ensuring your satisfaction in our top priority</p>
          </div>
      </div>

      <NewsletterBox/>
      

    </div>
  )
}

export default About