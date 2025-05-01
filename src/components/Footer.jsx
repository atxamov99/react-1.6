import React from 'react'
import footer1 from '../assets/footer.png'
import logo from '../assets/logo.png'

const footer = () => {
  return (
     <footer>
        <div className="relative w-full h-[90vh]">
  <img
    src={footer1}
    alt="Download App"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
      Download the app now.
    </h1>
    <p className="text-white text-lg md:text-xl mb-6">
      Available on your favorite store. Start your premium experience now
    </p>
    <div className="flex gap-4">
      <button className="bg-[#FA4A0C] text-white px-6 py-3 rounded-full font-semibold">
        Playstore
      </button>
      <button className="border border-white text-white px-6 py-3 rounded-full font-semibold">
        App store
      </button>
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 bg-white">
  <img src={logo} alt="Logo" className="w-[150px]" />

  <div className="flex gap-4 mt-4 md:mt-0">
    <i className="bx bxl-twitter text-[#FA4A0C] text-2xl"></i>
    <i className="bx bxl-facebook-square text-[#FA4A0C] text-2xl"></i>
    <i className="bx bxl-instagram text-[#FA4A0C] text-2xl"></i>
  </div>

  <p className="text-[#5C5C5C] mt-4 md:mt-0 text-center">
    Copywright 2020 Bella Onojie.com
  </p>
</div>

     </footer>
  )
}

export default footer