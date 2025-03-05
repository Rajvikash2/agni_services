import React from 'react';

const reviews = [
  {
    name: "Alvini Lim",
    title: "Technical Founder",
    company: "At Dimensional",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Lorem ipsum dolor sit amet, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Tech Innovations",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review: "Lorem ipsum dolor sit amet, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Jane Smith",
    title: "Marketing Head",
    company: "Global Ventures",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    review: "Lorem ipsum dolor sit amet, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Jane Smith",
    title: "Marketing Head",
    company: "Global Ventures",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    review: "Lorem ipsum dolor sit amet, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Jane Smith",
    title: "Marketing Head",
    company: "Global Ventures",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    review: "Lorem ipsum dolor sit amet, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  }

];

const Carousel = () => {
  return (
    <div className="flex flex-col item-center  mt-30 mb-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl text-[#FF5B64] font-bold pl-5 pr-15 lg:pl-30">
        How We Helped Businesses Succeed <br />
        <span className="text-black">with German Language Training</span>
      </h1>

      {/* Carousel Wrapper */}
      <div className="relative w-full  max-w-full p-5 lg:pl-25 mt-8 overflow-hidden ">
        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
          {reviews.map((review, index) => (
            <div key={index} className="flex-none w-80 snap-center">
              <div className="bg-white border-1 border-zinc-200  shadow-xl rounded-xl p-6 flex flex-col ">
                <img src="/quote.png" className='w-12 h-12' alt="" />
                <p className="text-gray-600">{review.review}</p>
                <div className="mt-6 flex items-center space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p>{review.name}</p>
                    <p className="text-sm text-gray-500">{review.title}</p>
                    <p className="text-sm text-gray-500">{review.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
