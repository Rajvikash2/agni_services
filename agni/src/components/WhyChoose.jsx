import React from 'react'

const WhyChoose = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 mt-20 items-center justify-evenly px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-5  md:max-w-[525px] w-full'>
        <div className='flex flex-col items-center md:items-start'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#33C9C0] mb-10 text-center md:text-left'>Why Choose Agni?</h1>
          
          {/* Mobile and Desktop Shared Image */}
          <div className='md:hidden mb-10 w-full flex justify-center'>
            <img src="/whychoose.png" alt="" className='w-full max-w-[500px] rounded-xl shadow-lg'/>
          </div>
        </div>
        
        {/* Features in a column for mobile, two columns for desktop */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex md:flex-col md:items-start items-center  gap-2 '>
            <img src="/experience.png" alt="" className='w-10 h-10'/>
            <h1 className='font-semibold text-xl'>Exclusive German Language Expertise</h1>
          </div>
          <div className='flex md:flex-col md:items-start items-center gap-2 '>
            <img src="/hand.png" alt="" className='w-10 h-10'/>
            <h1 className='font-semibold text-xl'>India's Only B2B German Language Partner</h1>
          </div>
          <div className='flex md:flex-col md:items-start items-center gap-2 '>
            <img src="/idea.png" alt="" className='w-10 h-10'/>
            <h1 className='font-semibold text-xl'>Tailored Solutions for Schools & Corporates</h1>
          </div>
          <div className='flex md:flex-col md:items-start items-center gap-2'>
            <img src="/star.png" alt="" className='w-10 h-10'/>
            <h1 className='font-semibold text-xl'>Trusted by 50+ Businesses & Educational Institutes</h1>
          </div>
        </div>
      </div>
      
      {/* Desktop Image - Hidden on mobile */}
      <div className='hidden md:flex flex-col'>
        <img src="/whychoose.png" alt="" className='w-[616px] h-[450px] rounded-xl shadow-lg'/>
      </div>
    </div>
  )
}

export default WhyChoose