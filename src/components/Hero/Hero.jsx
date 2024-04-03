import React from 'react';
import imageseh from '../../assets/daraz.jpg';
import imageset from "../../assets/img2.jpg";
import imagesew from "../../assets/img3.jpg";
import Slider from "react-slick";
const ImageList =[
{
  id:1,
  img: imageseh,
  title: "Upto 50% of on all Women's  Wear",
  description: "This is a chiffon dress of the Pakistani women which is embroidered. Buy Pakistani clothes online cheap from our online store. The front, back, and ...",

},
{id:2,
  img:imageset ,
  title: "Upto 30% of on all Women's  Wear",
  description: "This is a chiffon dress of the Pakistani women which is embroidered. Buy Pakistani clothes online cheap from our online store. The front, back, and ...",

},
{id:3,
  img: imagesew,
  title: "Upto 40% of on all Women's  Wear",
  description: "This is a chiffon dress of the Pakistani women which is embroidered. Buy Pakistani clothes online cheap from our online store. The front, back, and ...",

},
]
const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay:true,
    autolaySpeed:4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-200 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>

      <div className='h-[700px] w-[700px] bg-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

      </div>
      <div className='container pb-8 sm:pb-0'>
        <Slider {... settings}>
          {ImageList.map((data)=>(
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                <h1 
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                  {data.title}
                </h1>
                <p 
                data-aos="fade-up"
                data-aos-duration= "500"
                data-aos-delay="100"

                
                className='text-sm'>
                  {data.description}
                </p>
                <div
                data-aos="fade-up"
                data-aos-duration= "500"
                data-aos-delay="300"
                >
                  <button onClick={handleOrderPopup}
                  className='bg-gradient-to-r from-secondary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                    Order Now
                  </button>
                </div>
              </div>
              <div className='order-1 sm:order-2'>
                <div
                data-aos="zoom-in" data-aos-once ="true"
                 className='relative z-10'>
                  <img src={data.img} alt="" className='w-[200px] h-[200px] sm:h-[250px] sm:w-[250px] sm:scale-125 lg:scale-120	mr-10 object-contain mx-auto' />
                </div>
              </div>
            </div>
          </div>
  
          ))}
        
        </Slider>

        {/* <div>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                Lorem ipsum dolor sit.
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, repudiandae?
              </p>
              <div>
                <button className='bg-gradient-to-r from-secondary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                  Order Now
                </button>
              </div>
            </div>
            <div className='order-1 sm:order-2'>
              <div className='relative z-10'>
                <img src={imageseh} alt="" className='w-[200px] h-[200px] sm:h-[250px] sm:w-[250px] sm:scale-125 	mr-10 object-contain mx-auto' />
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Hero