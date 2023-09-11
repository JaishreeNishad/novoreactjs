import React, { useState } from "react";
import Slider from "react-slider-modal";
import "animate.css/animate.min.css";

 
function CategSlider() {
  const [slideShow, setSlideShow] = useState(false);
  return (
    <>
      <button className='font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-20
    text-white  transform -rotate-90   pl-2 inline-block hover:text-yellow-800 cursor-pointer'
     type="button"
        onClick={() => {
          setSlideShow(!slideShow);
        }}
      >
        CATEGORIES
      </button>

      <Slider
        
        animation="slide"
        closeModal={(e) => {
          setSlideShow(e);
        }}
        toggle={slideShow}
        closeIcon={() => {
          setSlideShow(false);
        }}
        direction="right"
        size=""
       >
       <div className="flex h-[500px] w-screen bg-black ">
        <div className='  w-1/4 mt-20 bg-[url("https://promo-theme.com/novo/wp-content/uploads/2017/08/slide4.jpg")] object-cover   bg-cover bg-center '>
          
          <h1 className="text-5xl mt-72 pl-12"  >
           <span className="text-gray-300 ">01</span>Portraits
          </h1>
        </div>

        <div className='  w-1/4  mt-20 bg-[url("https://promo-theme.com/novo/wp-content/uploads/2017/08/slide1.jpg")] object-cover  bg-cover  bg-center'>
          
        <h1 className="text-5xl mt-72 pl-12">
           <span className="text-white space-x-2 ">02</span>Lifestyle
          </h1>
        </div>
        <div className=' w-1/4 mt-20 bg-[url("https://promo-theme.com/novo/wp-content/uploads/2017/08/slide2.jpg")] object-cover bg-cover bg-center'>
        <h1 className="text-5xl mt-72 pl-12">
           <span className="text-white space-x-2 ">03</span>Studio
          </h1>
          </div>
          <div className='  w-1/4 mt-20 pl- 10 bg-[url("https://promo-theme.com/novo/wp-content/uploads/2017/08/category3.jpg")] object-cover  bg-cover bg-center'>
        <h1 className="text-5xl mt-72 pl-12">
           <span className="text-white space-x-2 ">04</span>Fashion
          </h1>
          </div>
        </div>
      
    

        {/* <div className=" max-w-[1400px]  h-[500px]   flex  ">
          <div className="w-1/4 h-500px bg-{https://promo-theme.com/novo/wp-content/uploads/2017/08/slide4.jpg}">
          <h1 className="text-bl relative">hiiii</h1>
           <img
             className="max-w-[350px]  h-[500px] absolute "
            src=""
            alt="image"
          /> 
          
           
         
          </div>

          <div  className="w-1/4">
          <img
             className=" max-w-[350px]  h-[500px] "
            src="https://promo-theme.com/novo/wp-content/uploads/2017/08/slide1.jpg"
            alt="image"
          />
          </div>
          <div  className="w-1/4">
          <img
             className=" max-w-[350px]  h-[500px] "
            src="https://promo-theme.com/novo/wp-content/uploads/2017/08/slide2.jpg"
            alt="image"
          />
          </div>
          <div  className="w-1/4">
          <img
             className=" max-w-[350px]  h-[500px]"
            src="https://promo-theme.com/novo/wp-content/uploads/2017/08/category3.jpg"
            alt="image"
          />
          </div>
          </div> */}
          
          
          
      </Slider>
    </>
  );
}

export default CategSlider;


