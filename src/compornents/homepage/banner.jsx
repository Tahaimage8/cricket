import React from 'react';
import backgroundImg from "../../assets/bg-shadow.png"
import banner from "../../assets/banner-main.png"
const Banner = () => {
    return (
       <div className="container mx-auto">
      <div className="relative min-h-[50vh] bg-black rounded-2xl overflow-hidden">

        <img
          src={backgroundImg}
          alt="bgImg"
          className="w-full h-[50vh] object-cover rounded-2xl"
        />


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <img src={banner} alt="bg" className='p-2' />
          <h1 className="text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="mt-6 px-6 py-3 rounded-xl bg-lime-400 text-black font-semibold btn btn-soft btn-success">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;