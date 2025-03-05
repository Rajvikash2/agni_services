import React from 'react';

const Top = () => {
  return (
    <div className="relative w-full min-h-screen space-y-10 mt-7 flex flex-col  items-center text-center px-4"
         style={{
           backgroundImage: "url('/flag.png')",
           backgroundSize: "100% 100%",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
         }}
    >
      <div className="relative z-10">
        
        <h1 className='text-4xl md:text-6xl lg:text-8xl text-pink-600 font-bold mb-4'>
          India's #1
        </h1>

     
        <h2 className='text-2xl md:text-4xl lg:text-6xl mb-2'>
          B2B German Language
        </h2>
        <h2 className='text-2xl md:text-4xl lg:text-6xl mb-4'>
          Service Provider
        </h2>
        <p className='text-lg hidden md:block md:text-2xl  lg:text-3xl mt-4'>
          Empowering Schools, Institutes &<br />
          Corporations with Language Expertise
        </p>

     
        <div className="mt-4 sm:mt-6">
        <button className='bg-[#F07B3F] w-[256px] text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors  gap-2'>
           <div className='flex gap-2 items-center'> <img src="/phone.png" alt="Phone" className="w-5 h-5" /> 
            Get a Free Consultation</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
