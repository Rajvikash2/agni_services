import React from 'react';

const Nurse = () => {
  return (
    <div 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center md:px-10"
      style={{
        backgroundImage: "url('/hospital.jpg')",
      }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      {/* Content Box - Shift Left Without Affecting Image */}
      <div className="relative z-10 bg-white p-6 md:p-10 rounded-lg shadow-lg  max-w-full ml-8 lg:ml-16 -mr-70">
        <h1 className="text-[48px] font-bold">
          <span className="text-pink-600">Free Recruitment</span> <span className="text-black">for Nurses!</span>
        </h1>

        <ul className="mt-4 space-y-2 text-lg">
          <li>🔷 100% Free Processing - No Fees!</li>
          <li>🔷 Earn ₹2 Lakhs+ Monthly in Germany!</li>
          <li>🔷 PR/Citizenship in Just 4 Years!</li>
          <li>🔷 Secure & Stable Nursing Career!</li>
        </ul>

        <div className="mt-6 flex flex-col md:flex-row md:w-xl max-w-full">
          <h2 className="font-semibold text-xl">Who Can Apply?</h2>
          <div className="grid grid-cols-3 gap-2 border-2 border-gray-300 p-3 rounded-md text-center text-sm md:text-base">
            <span className="border-r border-gray-300 pr-2">BSc/GNM Nursing</span>
            <span className="border-r border-gray-300 pr-2">Age <br />below 35</span>
            <span>Freshers & Experienced</span>
          </div>
        </div>
      </div>
      
      {/* Nurse Image - Move Left Without Resizing */}
      <div className="absolute  left-[-40px] md:left-[-5px] bottom-0 w-1/2 h-full pointer-events-none z-20">
        <img 
          src='/nurse.png' 
          alt="Nurse" 
          className="absolute left-0 bottom-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Nurse;
