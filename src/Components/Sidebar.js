import React from 'react'
import { Switch } from 'antd';
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { Link } from "react-router-dom";


import { FiFacebook} from "react-icons/fi";
import { ConfigProvider, theme, Button, Card } from "antd";
import CenterSlider from './CenterSlider';
import CategSlider from './CategSlider';
import About from './About';


const Sidebar = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };

    
  return (
    <div className='flex'>
        <div className='w-1/12 h-[500px] bg-black text-white'>
        <Switch defaultChecked onChange={onChange}  className='block  origin-left-top transform -rotate-90 mt-20 pr-20 '/>
        <br/>
        
        <AiFillTwitterSquare className='block origin-left-top mt-5 hover:text-yellow-700'/>
        
        <h2 className='block  transform -rotate-90 mt-10 hover:text-yellow-700'>instagram</h2>
        <br/>
        <br/>
        
        <AiOutlineInstagram className='block origin-left-top hover:text-yellow-700 '/>
        <br/>
        
        <h2 className='block  transform -rotate-90 hover:text-yellow-700'>facebook</h2>
        <br/>
        <br/>
        
        <FiFacebook  className='block  transform -rotate-90 hover:text-yellow-700'/>

        </div>
        <div className='w-5/6   h-[500px] '>
            <CenterSlider
             
            />
            
        </div>
        <div className='w-1/12 h-[500px] bg-black text-white'>
            
            <CategSlider/>
             <About/> 
            
       
        </div>
        </div>
       
    
       
        

                

            
    
  )
}

export default Sidebar