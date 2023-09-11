import React, { useState } from "react";
import Slider from "react-slider-modal";
import "animate.css/animate.min.css";
import { AiOutlineUnorderedList } from "react-icons/ai";

 
function LeftAipage() {
  const [slideShow, setSlideShow] = useState(false);
  return (
<div>
     <AiOutlineUnorderedList color="white" size="20px" className='cursor-pointer'
      onClick={() => {
        setSlideShow(!slideShow);
      }} /> 
     

      <Slider
        
        animation="slide"
        closeModal={(e) => {
          setSlideShow(e);
        }}
        toggle={slideShow}
        closeIcon={() => {
          setSlideShow(false);
        }}
        direction="left"
        size=""
       >
        <div className=" max-h-full bg-black ">
           
            <h1 className="text-white pt-20 pl-10 text-3xl font-bold">My name is Alex Novo,I'm <br/>a photographer.</h1>
        <span className="text-gray-500 pt-3 pl-10">___</span>
            <p className="text-white font-thin pl-10 pt-5">The world without photography will be<br/>meaningless to us if there is no light and color,<br/>which opens up our minds and expresses<br/>passion.</p>
            <span className="text-gray-500 pt-3 pl-10">___</span>
            <h1 className="text-white font-extrabold text-2xl pl-10 pt-5">Latest photos</h1>
            <span className="text-gray-500 pt-3 pl-10">___</span>
            {/* <div className=" w-1/2 h-full bg-yellow-300 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
            
    <img src='https://lonelyplanetstatic.imgix.net/marketing/2022/ig/pandeyrr.jpg?auto=format&fit=fill&q=75&w=384' className="mt-10 pl-20"/>
   
    
    <img src='https://lonelyplanetstatic.imgix.net/marketing/2022/ig/les_carnets_de_mel.jpg?auto=format&fit=fill&q=75&w=384' className=" mt-10 "/>
    
    
    <img src='https://lonelyplanetstatic.imgix.net/marketing/2022/ig/wanderlust_fabiana.jpg?auto=format&fit=fill&q=75' className="mt-10 mb-10 pr-20"/>
    
    </div> */}
    <h1 className="text-white font-extrabold text-2xl pl-10 pt-5">Categories</h1>
    <span className="text-gray-500 pt-3 pl-10">___</span>
    <h1 className="text-gray-600 hover:text-yellow-800 pl-10 pt-5 "><span className="text-gray-600 hover:text-yellow-800 ">*</span> Fashion</h1>
    
    <span className="text-gray-500 pt-3 pl-10">__________________________________________</span>
    <h1 className="text-gray-600 hover:text-yellow-800 pl-10 pt-5 "><span className="text-gray-600 hover:text-yellow-800 ">*</span> Music</h1>
    <span className="text-gray-500 pt-3 pl-10">__________________________________________</span>
    <h1 className="text-gray-600 hover:text-yellow-800 pl-10 pt-5 "><span className="text-gray-600 hover:text-yellow-800 ">*</span> Nature</h1>
    <span className="text-gray-500 pt-3 pl-10">__________________________________________</span>
    <h1 className="text-gray-600 hover:text-yellow-800 pl-10 pt-5 "><span className="text-gray-600 hover:text-yellow-800 ">*</span> Portraits</h1>
    <span className="text-gray-500 pt-3 pl-10">__________________________________________</span>
    <h1 className="text-gray-600 hover:text-yellow-800 pl-10 pt-5 "><span className="text-gray-600 hover:text-yellow-800 ">*</span> Studio</h1>
    <span className="text-gray-500 pt-3 pl-10">__________________________________________</span>
    
    
    
          </div>
      </Slider>
      </div>
    
  );
}

export default LeftAipage;


