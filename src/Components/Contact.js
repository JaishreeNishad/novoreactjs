
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const openDropdown = () => {
        setIsDropdownOpen(true);
      };
    
   const closeDropdown = () => {
         setIsDropdownOpen(false);
       };
  return (
    <div>
         <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
          <li
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            className='relative' 
          >
            <Link to='/' className='text-white py-7 px-3 inline-block  hover:text-yellow-800'>
              CONTACT
            </Link>
            {isDropdownOpen && (
              <div
                className="absolute bg-black text-white z-10 mt-1" 
                onMouseEnter={openDropdown} 
                onMouseLeave={closeDropdown}
              >
                <a
                  href="#"
                  className="block  px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
                >
                  CONTACTS
                </a>
                <a
                  href="#"
                  className="block  px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
                >
                  CONTACTS2
                </a>
                
              </div>
            )}
          </li>
        </ul> 
        

    </div>
  )
}

export default Contact