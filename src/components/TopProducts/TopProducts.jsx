import React from 'react';
import Img2 from "../../assets/printed1.jpeg";
import Img3 from "../../assets/shirts1.jpeg";
import Img4 from "../../assets/kids1.jpeg";
import { FaStar } from 'react-icons/fa6';
const ProductsData =[
  {
    id: 1,
    img : Img4,
    title : "Casual Wear",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae molestias ea ipsam, expedita, quia sapiente, modi voluptatum fugit accusantium doloribus consequatur veritatis libero voluptatem voluptas ut cupiditate beatae quae.",
  },
  {
    id: 2,
    img : Img2,
    title : "Factory Outlet",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae molestias ea ipsam, expedita, quia sapiente, modi voluptatum fugit accusantium doloribus consequatur veritatis libero voluptatem voluptas ut cupiditate beatae quae.",
  },
  {
    id: 3,
    img : Img3,
    title : "Women Shirts",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae molestias ea ipsam, expedita, quia sapiente, modi voluptatum fugit accusantium doloribus consequatur veritatis libero voluptatem voluptas ut cupiditate beatae quae.",
  },
  
]
console.log(ProductsData );
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
      <div className='text-left mb-24 '>
          <p data-aos ="fade-up" className='text-sm  text-secondary'>Top Rated Products for you </p>
          <h1 data-aos ="fade-up" className='text-3xl font-bold'>Best Products</h1>
          <p data-aos ="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officia, alias ipsum sint adipisci saepe inventore atque numquam debitis.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'
        >
          {
            ProductsData.map((data,index)=>(
                <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-secondary hover:text-white relative shadow-xl duration-300 group max-w-[300px] '>
                <div key={index} className=''>
                  <img src={data.img} alt="" className='max-w--[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                  
                </div>
                <div className='p-4 text-center'>
                 {/*star rating*/}
                 <div className='w-full flex items-center justify-center gap-1'>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                 </div>
                 <h1 className='text-xl font-bold'>{data.title}</h1>
                 <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>

                 <button className='bg-secondary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-secondary' 
                  onClick={handleOrderPopup}>
                  Order Now
                 </button>
                </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopProducts