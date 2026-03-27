import React from 'react';
import dollerImg from "../../assets/dollar_1.png"
import LogoIMG from "../../assets/logo.png"
const Navbar = ({coin}) => {
    return (
        <div>
 <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-none">
  </div> 
  <div className="flex-1">
    <img src={LogoIMG} alt="" />
  </div>
  <div className="flex-none">
    <button className=" flex justify-between items-center gap-1 font-bold text-xl">
        ${coin} coins
     <img src={dollerImg} alt="" />
    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;