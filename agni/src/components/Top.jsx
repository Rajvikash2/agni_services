import React from 'react';

const Top = () => {
  return (
    <div className="relative w-full flex flex-col h-[432px] md:min-h-screen space-y-10 mt-7  items-center text-center px-4"
         style={{
           backgroundImage: "url('/flag.png')",
           backgroundSize: "100% 100%",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
         }}
    >
      {/* <div className='bg-orange-400 w-full p-4'>
        navabar
      </div> */}
      <div className="relative z-10">
        
        <h1 className='text-4xl md:text-6xl lg:text-8xl text-pink-600 font-bold mb-2'>
          India's #1
        </h1>

     
        <h2 className='text-2xl font-semibold md:text-4xl lg:text-6xl mb-4'>
          B2B German Language
        </h2>
        <h2 className='text-2xl font-semibold md:text-4xl lg:text-6xl mb-6'>
          Service Provider
        </h2>
        <p className='text-lg hidden md:block md:text-2xl  lg:text-3xl mt-4'>
          Empowering Schools, Institutes &<br />
          Corporations with Language Expertise
        </p>

     
        <div className="md:mt-6 mt-2">
        <button className='bg-[#F07B3F] w-[200px] md:w-[240px]  text-white px-2 py-2 md:px-6 md:py-4 rounded-full hover:bg-orange-600 transition-colors  gap-2'>
           <div className='flex gap-2 items-center text-[14px] md:text-[15px] '> <img src="/phone.png" alt="Phone" className="w-5 h-5" /> 
            Get a Free Consultation</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
