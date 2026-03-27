import React from 'react';
import dollerImg from "../../assets/dollar_1.png"
const Navbar = () => {
    return (
        <div>
 <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div> 
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className=" flex justify-between items-center gap-1 font-bold text-xl">
        0 coins
     <img src={dollerImg} alt="" />
    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;