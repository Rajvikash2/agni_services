import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Card = () => {
  return (
    <div className="flex flex-col items-center mb-10 px-4">
      <div className="flex flex-col w-full max-w-[1240px] gap-3 p-6 md:p-10 rounded-lg bg-[#9EADFE] text-white">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold">
          Ready to Elevate Your Business with German Expertise?
        </h1>
        <h2 className="text-lg md:text-xl font-extralight">
          Start Your Journey to Germany Now!
        </h2>

        {/* Buttons Section */}
        <div className="flex flex-row gap-4 md:gap-40 mt-6">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <h1 className="text-lg md:text-xl">Schedule a Free Consultation</h1>
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <h1 className="text-lg md:text-xl">Send an Inquiry</h1>
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
