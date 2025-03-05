import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Services = () => {
    const [openSection, setOpenSection] = useState(null);
    const services = [
        {
          title: 'Intercultural Training',
          description: 'Bridging cultural gaps for professionals and businesses working between India & Germany.',
          details: [
            'For healthcare professionals & expats relocating to Germany',
            'For German professionals working in India',
            'For Indian & German businesses collaborating globally'
          ],
          coveragePoints: [
            'Business etiquette & professional conduct',
            'Workplace communication & expectations',
            'Cultural norms & social integration'
          ],
          whyChooseSection: 'What we cover?'
        },
        {
          title: 'German Language Training for Schools & Institutes',
          description: 'We provide structured German courses (A1-B2 levels) for:',
          details: [
            'Language institutions, schools, and colleges.',
            'Coaching centers offering German certifications.'
          ],
          coveragePoints: [
            'Aligned with Goethe, TELC, & ÖSD certification standards.',
            'CBSE & ICSE curriculum integration for school learners.',
            'Expert native German instructors with real-world experience.',
            'Comprehensive study materials & practice sessions.'
          ],
          whyChooseSection: 'Why Choose Agni?'
        },
        {
          title: 'Corporate German Language Training',
          description: 'Does your business need German-speaking employees?',
          details: [
            'IT professionals working with German clients.',
            'Customer service teams handling German-speaking customers.',
            'Business professionals expanding into the German market.'
          ],
          coveragePoints: [
            'General German for workplace communication.',
            'Industry-specific training (IT, healthcare, finance, etc.).',
            'Flexible formats – online & in-person training.'
          ],
          whyChooseSection: 'Key Features:'
        },
        {
          title: 'German Translation & Interpretation Services',
          description: 'Professional translation services for businesses, including:',
          details: [
            'Website & content translation',
            'Business, medical & technical document translation',
            'Interpretation for business meetings & conferences',
            'Accurate documentation for contracts, policies, and compliance.',
            'Professional German interpreters for meetings, conferences, and negotiations.'
          ]
        },
        {
          title: 'Sales Department Training',
          description: 'Tailored for Indian businesses selling to German clients',
          details: [
            'Client communication & negotiation skills',
            'Cultural business understanding & real-world role-play',
            'Training available in English & German',
            'Deliver impactful pitches tailored for German clients.',
            'Hands-on practice for common business situations.'
          ]
        }
    ];

    const toggleService = (title) => {
        setOpenSection(openSection === title ? null : title);
    };

    return (
        <div className='container mx-auto px-4 py-12'>
            <h1 className='text-[26px] md:text-[48px] text-[#421193] font-bold text-center mb-8'>
                Comprehensive Language Services <span className='text-black'> for B2B Needs</span>
            </h1>

            {/* Responsive Layout */}
            <div className='flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8'>

                {/* Image Section */}
                <div className='w-full md:w-1/2'>
                    <img 
                        src="/services.png" 
                        alt="Language Services" 
                        className='w-full h-[400px] md:h-[700px] object-cover rounded-lg shadow-lg'
                    />
                </div>

                {/* Services Dropdown */}
                <div className='w-full md:w-1/2 space-y-4'>
                    {services.map((service) => (
                        <div 
                            key={service.title} 
                            className='border-2 border-gray-200 rounded-lg overflow-hidden'
                        >
                            {/* Service Title */}
                            <div 
                                className='flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 '
                                onClick={() => toggleService(service.title)}
                            >
                                <div className="flex  items-center max-md:flex-[10]">
                                    <span className="mr-2 text-blue-500">🔷</span>
                                    <h2 className="text-lg font-semibold">{service.title}</h2>
                                </div>
                                {openSection === service.title ? (
                            <Minus className="bg-orange-400 rounded-sm text-white max-md:flex-[1]" />
                            ) : 
                            (
                            <Plus className="bg-orange-400 rounded-sm text-white max-md:flex-[1]" />
                            )}
                            </div>

                            {/* Dropdown Content */}
                            {openSection === service.title && (
                                <div className='p-4 bg-white'>
                                    {service.description && (
                                        <p className='text-gray-600 mb-4'>{service.description}</p>
                                    )}
                                    
                                    {service.details && (
                                        <ul className='mb-4 space-y-2 text-gray-700'>
                                            {service.details.map((detail, index) => (
                                                <li key={index} className='flex items-center'>
                                                    <span className="mr-2">•</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {service.coveragePoints && (
                                        <div>
                                            {service.whyChooseSection && (
                                                <h3 className='mb-3 font-semibold'>{service.whyChooseSection}</h3>
                                            )}
                                            <div className='p-3 rounded-lg'>
                                                {service.coveragePoints.map((point, index) => (
                                                    <div 
                                                        key={index} 
                                                        className='flex items-center mb-2 last:mb-0'
                                                    >
                                                        <span>✅ {point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
