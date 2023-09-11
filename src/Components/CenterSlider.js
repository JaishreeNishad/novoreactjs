import { useState } from "react"
import React from 'react'
import { BsChevronCompactLeft}  from "react-icons/bs";
import { BsChevronCompactRight}  from "react-icons/bs";

const CenterSlider = () => {
    const slides = [
        {
            url:'https://promo-theme.com/novo/wp-content/uploads/2017/08/slide1.jpg'
        },
        {
            url:'https://promo-theme.com/novo/wp-content/uploads/2017/08/slide2.jpg'
        },
        {
            url:'https://promo-theme.com/somo/wp-content/uploads/2019/11/video1.mp4'
        },
        {
            url:'https://promo-theme.com/novo/wp-content/uploads/2017/08/slide4.jpg'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
 
     const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);

     }

     const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide   ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

        
     }

    
  return (
    <div className="max-w-[1400px]  h-[500px]   bg-red-500 relative">
       <h1 className="text-white absolute mt-56 pl-10"><span className="text-yellow-800">___</span>  Portraits</h1>
       <h1 className="text-white absolute mt-72  pl-10 text-5xl font-extrabold">How to disapear<br/> completely</h1>
       <h1 className="text-yellow-800 absolute pl-10 mt-96  hover:text-white cursor-pointer font-semibold">Read more </h1>
        <div style={{backgroundImage : `url(${slides[currentIndex].url})`}} className="w-full h-full  bg-center bg-cover duration-500"></div>
        {/* Left ARROW */}
         <div className="absolute end-[50%] -translate-x-0 translate-y-[-300%] right-6 text-2xl text-white" >
        <BsChevronCompactLeft className=""  onClick={ prevSlide} size={30}/>
        </div>
        {/* RIGHT ARROW */}
          <div className="absolute end-[50%] -translate-x-0 translate-y-[-300%] right-1 text-2xl text-white">
        <BsChevronCompactRight  className="" onClick={ nextSlide}  size={30}/>
        </div>   
      
    </div>
  )
}

export default CenterSlider
