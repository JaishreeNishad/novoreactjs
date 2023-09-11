
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    
  return (
    <div>
         <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
         <li>
            <Link to='/' className='text-white py-7 px-3 inline-block  hover:text-yellow-800'>
              BOOKING
            </Link>
            
            </li>
            
          
        </ul> 
        

    </div>
  )
}

export default Booking