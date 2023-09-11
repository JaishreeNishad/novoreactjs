import React, { useState } from "react";
import Slider from "react-slider-modal";
import "animate.css/animate.min.css";

 
function About() {
  const [slideShow, setSlideShow] = useState(false);
  return (
    <>
      <button className='font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 
    text-white  transform -rotate-90  mt-40 pr-12 inline-block hover:text-yellow-800'
     type="button"
        onClick={() => {
          setSlideShow(!slideShow);
        }}
      >
        ABOUT
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
        <div className=" max-w-[1400px]  h-[500px]   flex  ">
          <div className="w-1/2 ">
          <img
             className=""
            src="https://promo-theme.com/novo/wp-content/uploads/2017/08/about-img.jpg"
            alt="nature image"
          />
          
          </div>
          <div className="w-1/2 bg-black"> 
          <h3 className="pl-10 mt-10 text-yellow-800 font-bold">ABOUT ME</h3>
          <h1 className="pl-10 mt-10 text-4xl font-extrabold">My name is Alex Novo,<br/>
              I’m a Photographer.</h1>
          <p className="pl-10 mt-10">The world without photography will be meaningless<br/> to us if there is no light and color, which opens up<br/> our minds and expresses passion. My photos are<br/> inspired by light, color, creative perspective,<br/> techniques & personalities.</p>
          </div>

          
          
          
           
          
        </div>
      </Slider>
    </>
  );
}

export default About;


