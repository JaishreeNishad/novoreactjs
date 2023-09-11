import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import { AiOutlineShoppingCart} from "react-icons/ai";
import { BiSearch} from "react-icons/bi";
import { AiOutlineUnorderedList} from "react-icons/ai";

import Blog from './Blog';
import Pages from './Pages';
import Gallery from './Gallery';
import Shop from './Shop';
import Contact from './Contact';
import Booking from './Booking';
import LeftAipage from './LeftAipage';

const Navbar = () => {


  return (
    <nav className='bg-black'>
      <div className='flex justify-around items-center font-medium first-line'>
        <div className='w-1/2 flex mt-3 pl-24 space-x-3 '>
        {/* <AiOutlineUnorderedList color="white" size="20px" className='' />  */}
        <LeftAipage/>

          <a href='https://promo-theme.com/novo/'>
            <span className='text-white md:cursor-pointer h-10 text-xl font-bold'>NOVO</span>
          </a>
        </div>
        <div className='w-1/2 flex'>
        <Home/>
        <Blog/>
        <Pages/>
        <Gallery/>
        <Shop/>
        <Contact/>
        <Booking/>
       <AiOutlineShoppingCart color="white" size="50px" className='mt-4 pl-4' />
       <BiSearch color="white" size="50px" className='mt-4 pl-4' />
            
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
