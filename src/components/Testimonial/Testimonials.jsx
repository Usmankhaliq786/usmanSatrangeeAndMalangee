import React from 'react';
import Slider from 'react-slick';
import Image1 from "..//..//assets/imrankhan.jpg";
import Image2 from "..//..//assets/babarAzam.jpeg";
import Image3 from "..//..//assets/maryyam.jpeg";
import Image4 from "..//..//assets/sehbaz.jpeg";
import Image5 from "..//..//assets/usman1.jpeg"

const TestimonialsData =[
  {
    id:1,
    name: "Imran Khan",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nihil aliquam beatae optio, aspernatur natus temporibus! Sequi inventore ipsam fugit, excepturi dolore culpa explicabo ut corporis libero, totam, nobis quam!",
    img: Image1,
  },
  {
    id:2,
    name: "Babar Azam",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nihil aliquam beatae optio, aspernatur natus temporibus! Sequi inventore ipsam fugit, excepturi dolore culpa explicabo ut corporis libero, totam, nobis quam!",
    img: Image2,
  },
  {
    id:3,
    name: "Maryam Nawaz",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nihil aliquam beatae optio, aspernatur natus temporibus! Sequi inventore ipsam fugit, excepturi dolore culpa explicabo ut corporis libero, totam, nobis quam!",
    img: Image3,
  },
  {
    id:4,
    name: "Sehbaz Sharif",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nihil aliquam beatae optio, aspernatur natus temporibus! Sequi inventore ipsam fugit, excepturi dolore culpa explicabo ut corporis libero, totam, nobis quam!",
    img: Image4,
  },
  {
    id:5,
    name: "Usman Ghazi",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nihil aliquam beatae optio, aspernatur natus temporibus! Sequi inventore ipsam fugit, excepturi dolore culpa explicabo ut corporis libero, totam, nobis quam!",
    img: Image5,
  },
]
const Testimonials = () => {
  var settings ={
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1,
          infinite:true,
        },
      },
      {
        breakpoint:1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide:2,
        },
      },
      {
        breakpoint: 640,
        settings:{
          slidesToShow:1,
          slidesToScroll: 1,
        },
      },
    ], 
  };
  console.log(TestimonialsData);
  return (
    <div className='py-10 mb-10'>
      <div className='container'>
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos ="fade-up" className='text-sm  text-secondary'> What Our customers are saying </p>
          <h1 data-aos ="fade-up" className='text-3xl font-bold'>Testimonials</h1>
          <p data-aos ="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officia, alias ipsum sint adipisci saepe inventore atque numquam debitis.</p>
        </div>
        {/*Testimonials card */}
        <div 
        data-aos="zoom-in">
         <Slider {... settings}>{
          TestimonialsData.map((data)=>(

            <div className='my-6 '>
         <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-secondary/10 relative'> 
            <div className='mb-4 ' >
            <img src={data.img} alt='' className='rounded-full w-20 h-20'/>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <div className='space-y-3'>
              <p className='text-xs text-gray-500'>{data.text}</p>
              <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
              </div>
              
            </div>
            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
              ,,
            </p>
            </div>
            
            </div>
          ))
         }

         </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials