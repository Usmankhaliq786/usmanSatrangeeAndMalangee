import React from 'react';
import image from "../../assets/logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";

const Menu = [
  {
    id: 0,
    name: "Home",
    link: "/#",
  },
  {
    id: 1,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 2,
    name: "Kids Wear",
    link: "#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Womens Wear",
    link: "/#",
  },
];

const DropsLinks = [
  { 
    id: 1,
    name: "Trending products",
    link: "/#",
  },
  { 
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  { 
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='bg-secondary/40 py-1'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex items-center gap-2 text-gray-50'>
              <img src={image} alt="Logo" className='w-12 h-12' />
              Mufaza
            </a>
          </div>
          <div className='flex items-center'>
            <div className='relative group hidden sm:block'>
              <input 
                type="text" 
                placeholder='Search' 
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 dark:border-gray-500 dark:bg-gray-800'
              />
              <IoMdSearch className='text-2xl text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
            </div>
            <button
              onClick={handleOrderPopup}
              className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group m-2'
            >
              <span className='group-hover:block hidden transition-all duration-200'>Order</span>
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
          </div>
        </div>
      </div>
      <div data-aos ="zoom-in" className="container flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 hover:text-secondary duration-200">{data.name}</a>
            </li>
          ))}
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[px] py-2'>
              Trending Products
              <span>
                <FaCaretDown
                className='transition-all duration-200 group-hover:rotate-180'
                />
              </span>
            </a>
            <div className='absolute z[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {
                  DropsLinks.map((data) => (
                    <li key={data.id} >
                      <a href={data.link}
                        className='inline-block w-full rounded-md p-2 hover:bg-secondary/20 '
                        >
                        {data.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
