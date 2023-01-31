/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import './style.css'

const Footer = () => {

  return (
    <section id='footer' className='bg-black flex flex-col'>
      <div className="flex py-14 h-3/4 max-lg:flex-col max-lg:py-10">
         <div className="flex flex-col justify-center px-20 w-full max-lg:px-5">
            <h2 className='text-base uppercase tracking-widest text-white'>Location</h2>
            <div className="flex justify-between flex-wrap py-2 text-gray-400">
               <h4 className='text-base tracking-wide uppercase max-lg:py-1'>Serang Baru, Bekasi, West Java</h4>
               <h4 className='text-base tracking-wide uppercase max-lg:py-1'>Bandung, West Java</h4>
               <h4 className='text-base tracking-wide uppercase max-lg:py-1'>Surabaya, Central Java</h4>
               <h4 className='text-base tracking-wide uppercase max-lg:py-1'>Cikarang, West Java</h4>
            </div>
         </div>
         <div className="flex flex-col justify-center px-20 w-full max-lg:px-5 max-lg:py-10">
         <h2 className='text-base uppercase tracking-widest text-white'>Open Hours</h2>
         <div className="flex justify-between flex-wrap py-2 text-gray-400">
            <h4 className='text-base tracking-wide uppercase max-lg:py-1'>Mon-Wed 10:00-20:00 WIB</h4>
            <h4 className='text-base tracking-wide uppercase max-lg:py-1'>Thu 10:00-21:00 WIB</h4>
            <h4 className='text-base tracking-wide uppercase max-lg:py-1'>Fri 13:00-22:00 WIB</h4>
            <h4 className='text-base tracking-wide uppercase max-lg:py-1'>Weekend 10:00-18:00 WIB</h4>
         </div>
         </div>
      </div>
      <div className="flex justify-between items-center copyright w-full h-1/4 py-10 px-20 text-gray-500 max-lg:h-1/2 max-lg:flex-col max-lg:p-2 max-lg:py-2">
         <h1 className='max-lg:py-3'>
            <span className='text-gray-400'>&#169;2022</span> RMA Projects <span className='text-gray-400'>All Rights Reserved.  Images by</span> GraphicBurger & Unsplash
         </h1>
         <div className="flex items-center gap-8">
            <a target="_blank" className='hoveriser' href="https://www.instagram/raka_m.a">
               <FontAwesomeIcon className='fa-icons cursor-pointer' id='font-icon' icon={faInstagram} size="2x"/>
            </a>
            <a target="_blank" className='hoveriser' href="https://www.twitter.com/raka_m_a">
               <FontAwesomeIcon className='fa-icons cursor-pointer' id='font-icon' icon={faTwitter} size="2x"/>
            </a>
            <a target="_blank" className='hoveriser' href="https://www.github.com/RMA-17">
               <FontAwesomeIcon className='fa-icons cursor-pointer' id='font-icon' icon={faGithub} size="2x"/>
            </a>
         </div>
      </div>
    </section>
  )
}

export default Footer