import React from 'react';
import Image from '../assets/logo.png';
import img from '../assets/food-app.png';
import left from '../assets/left-phone.png';
import right from '../assets/right-phone.png';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center bg-white p-4'>
        <img className='w-[200px] h-auto' src={Image} alt="Logo" />
        <ul className='flex gap-[70px]'>
          <li><a className='hover:text-[#FA4A0C] transition-[0.5s]' href="#">Home</a></li>
          <li><a className='hover:text-[#FA4A0C] transition-[0.5s]' href="#">Product</a></li>
          <li><a className='hover:text-[#FA4A0C] transition-[0.5s]' href="#">Faq</a></li>
          <li><a className='hover:text-[#FA4A0C] transition-[0.5s]' href="#">Contact</a></li>
        </ul>
      </nav>
      <img className='relative z-0 w-[100%] h-[83vh]' src={img} alt="Food App" />
      <div className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center mt-[80px]'>
        <h1 className='text-[40px] text-white font-bold'>Food app</h1>
        <p className='text-[38px] font-bold text-white'>Why stay hungry when <br />
        you can order form Bella Onojie</p>
        <p className='text-[24px] font-bold text-white'>Download the bella onoje’s food app now on</p>
        <div className="gap-6 flex justify-center-safe">  
        <button className='bg-[#FA4A0C] rounded-[50px] text-white px-4 py-2 mt-4'>Order Now</button>
        <button className='bg-none border-2 border-white p-4 rounded-[50px] text-white px-4 py-2 mt-4'>App store</button>
        </div>
      </div>

      <div className="flex justify-center items-center relative z-5 bottom-[180px]">
        <img className='w-[500px] relative z-5' src={left} alt="" />
        <img className='w-[500px] mt-[100px] relative z-5' src={right} alt="" />
      </div>

    </header>
  );
}

export default Header;
