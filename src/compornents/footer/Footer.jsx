import React from "react";
import logo from "../../assets/logo-footer.png"; 

const Footer = () => {
  return (
    <div className="bg-[#020617] text-white pt-32 pb-6 relative ">
      

      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl ">
        <div className="rounded-2xl p-8 bg-linear-to-r from-[#dbeafe] via-[#f8fafc] to-[#fde68a] text-center shadow-xl">
          <h2 className="text-2xl font-bold text-black">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mt-2">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border w-64 outline-none input input-success"
            />
            <button className="px-5 py-2 rounded-lg bg-linear-to-r from-pink-400 to-yellow-400 text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

  
      <div className="container mx-auto mt-20 px-4 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={logo} alt="logo" className="w-20" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are a passionate team dedicated to providing the best
              services to our customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-3">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-2">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-lg w-full outline-none text-black input input-neutral"
              />
              <button className="px-4 py-2 rounded-r-lg bg-linear-to-r from-pink-400 to-yellow-400 text-black font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-gray-400 text-center">
          @2026 Your Company All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;