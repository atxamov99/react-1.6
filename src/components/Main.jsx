import React from 'react'
import img from '../assets/main-left.png'
import img1 from '../assets/Image1.png'
import img2 from '../assets/Image2.png'

const main = () => {
  return (
     <main>
      <div className="">

        <div className="border-[3px] border-[#E4E4E4] "></div>

          <h2 className='text-black text-center font-bold text-[30px]'>How the app works</h2>


        <div className="flex justify-around items-center">
          <div className="">
            <img className='w-[500px]' src={img} alt="" />
          </div>
          <div className="">
            <h3 className='text-[#FA4A0C] font-bold text-2xl'>Create an account</h3>
            <h1 className='text-4xl font-bold text-black pt-[20px] pb-[20px]'>Create/login to an existing <br /> account to get started</h1>
            <p className='text-[#737373]'>An account is created with your email <br />
            and a desired password</p>
          </div>
        </div>

        <div className="flex justify-around items-center">
          <div className="">
            <h3 className='text-[#FA4A0C] font-bold text-2xl'>Explore varieties</h3>
            <h1 className='text-4xl font-bold text-black pt-[20px] pb-[20px]'>Shop for your favorites <br />
            meal as e dey hot. </h1>
            <p className='text-[#737373]'>Shop for your favorite meals or drinks
            and enjoy while doing it.</p>
          </div>
          <div className="">
            <img className='w-[500px]' src={img1} alt="" />
          </div>
        </div>

        <div className="flex justify-around items-center">
          <div className="">
            <img className='w-[500px]' src={img2} alt="" />
          </div>
          <div className="">
            <h3 className='text-[#FA4A0C] font-bold text-2xl'>Checkout</h3>
            <h1 className='text-4xl font-bold text-black pt-[20px] pb-[20px]'>When you done check out <br />
            and get it delivered.</h1>
            <p className='text-[#737373]'>When you done check out and get it <br />
            delivered with ease.</p>
          </div>
        </div>

      </div>
     </main>
  )
}

export default main