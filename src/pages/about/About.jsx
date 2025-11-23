import React, { useState, useRef, useEffect, useCallback } from 'react';
import images from '../../constant/images';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, CaretLeft, CaretRight, Star } from '@phosphor-icons/react';
import View from '../../constant/view';

const About = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [email, setEmail] = useState('');
    

    const testimonials = [
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            name: "Rossana Isabella",
            location: "China",
            rating: 5
        },
        {
            quote: "Exceptional quality and service! The furniture exceeded my expectations and transformed my living space beautifully.",
            name: "John Smith",
            location: "USA",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className='min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16'>
            {/* Hero Section */}
            <div className='mt-8 lg:mt-0 relative w-full h-[35vh] flex items-center justify-center mb-16'>
                <img className='absolute w-full h-full rounded-xl object-cover' src={images.home_hotspot} alt="" />
                <div className='bg-black/75 rounded-xl absolute z-10 w-full h-full'></div>
                <div className='z-40 space-y-3 text-center'>
                    <h1 className='text-5xl text-white font-bold '>About Us</h1>
                    <div className='flex items-center justify-center gap-3 text-white'>
                        <Link className='text-white/70 uppercase hover:text-white transition-colors' to="/">HOME</Link>
                        <span>/</span>
                        <Link className='text-white uppercase' to="/about">About us</Link>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-10'>
                {/* World Class Furniture Section */}
                <section className='w-full'>
                    <div className='space-y-5'>
                        <div className=' space-y-6'>
                            <p className='text-[#DD7210] text-sm uppercase tracking-wider'>WE DESIGN</p>
                            <h2 className='lg:text-5xl text-3xl text-white  leading-tight'>
                                World Class Furniture's For Ultimate Comfort
                            </h2>
                            <p className='text-white/60 text-base leading-relaxed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                        </div>

                        <div className='mt-20'>
                            <img
                                src={images.home_2}
                                alt="Crafting Quality Furniture"
                                className='rounded-lg object-cover'
                            />
                        </div>
                    </div>
                </section>

                {/* Crafting Quality Furniture Section */}
                <section className='lg:mb-20 w-full'>
                    <div className='space-y-5'>
                        <div className=''>
                            <img
                                src={images.home_1}
                                alt="World Class Furniture"
                                className=' rounded-lg object-cover'
                            />
                        </div>
                        <div className='space-y-6'>
                            <h2 className='lg:text-3xl text-xl text-white  leading-tight'>
                                Crafting Quality Furniture
                            </h2>
                            <p className='text-white/60 text-base leading-relaxed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <ul className='space-y-4'>
                                {[
                                    "Premium quality materials and craftsmanship",
                                    "Sustainable and eco-friendly production methods",
                                    "Customizable designs to match your style"
                                ].map((item, index) => (
                                    <li key={index} className='flex items-start gap-3'>
                                        <Check size={24} weight="bold" className='text-[#DD7210] shrink-0 mt-0.5' />
                                        <p className='text-white/60 text-base'>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>
            </div>



           <View />



            {/* Customer Testimonials Section */}
            <section className='mb-20 '>
                <div className='text-center mb-12 space-y-3'>
                    <p className='text-[#DD7210] text-sm uppercase tracking-wider'>CUSTOMER NOTES</p>
                    <h2 className='lg:text-4xl text-2xl md:text-5xl text-white font-bold'>Words From Our Customers</h2>
                </div>
                <div className='relative max-w-4xl mx-auto'>
                    <div className='bg-black/50 rounded-xl p-8 md:p-12 text-center space-y-6'>
                        <div className='flex justify-center gap-1'>
                            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                <Star key={i} size={20} weight="fill" className='text-yellow-400' />
                            ))}
                        </div>
                        <p className='text-white/70 text-lg leading-relaxed'>
                            {testimonials[currentTestimonial].quote}
                        </p>
                        <div className='space-y-2'>
                            <div className='w-16 h-16 rounded-full mx-auto overflow-hidden'>
                                <img
                                    src={images.testimonial}
                                    alt={testimonials[currentTestimonial].name}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h4 className='text-white text-xl font-semibold'>{testimonials[currentTestimonial].name}</h4>
                            <p className='text-white/60 text-sm'>{testimonials[currentTestimonial].location}</p>
                        </div>
                    </div>
                    <button
                        onClick={prevTestimonial}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/50 text-white p-3 rounded-full border border-white/20 hover:border-[#DD7210] transition-colors'
                    >
                        <CaretLeft size={20} weight="bold" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/50 text-white p-3 rounded-full border border-white/20 hover:border-[#DD7210] transition-colors'
                    >
                        <CaretRight size={20} weight="bold" />
                    </button>
                </div>
            </section>



            {/* Newsletter/CTA Section */}
            <section className='relative  rounded-xl overflow-hidden'>

                <div className='absolute w-full h-full'></div>
                <div className='relative z-10  mx-auto text-center space-y-8 p-5'>
                    <div className='space-y-3'>
                        <p className='text-[#DD7210] text-sm uppercase tracking-wider'>ART OF COMFORT</p>
                        <h2 className='lg:text-3xl md:text-5xl text-white font-bold'>
                            Transforming Spaces, Transforming Style
                        </h2>
                    </div>
                    <div className='lg:flex flex items-center bg-[#DD7210]/30 lg:p-2 p-1 rounded-full  gap-4 max-w-2xl mx-auto'>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email id here"
                            className='flex-1 lg:px-6 px-4 lg:py-4 p-2 rounded-full bg-white text-black placeholder-gray-500 border-2 border-transparent focus:border-[#DD7210] focus:outline-none'
                        />
                        <button className='bg-[#DD7210] text-white lg:p-4 p-2 rounded-full  hover:text-white transition-all duration-300 scale-105'>
                            <ArrowRight size={24} weight="bold" />
                        </button>
                    </div>
                    <div className='flex items-center justify-center lg:gap-2 text-white/70 text-sm'>
                        <input type="checkbox" id="privacy" className='w-3 h-3' />
                        <label htmlFor="privacy" >
                            Your email is safe with us, we don't spam.{' '}
                            <a href="#" className='text-[#DD7210] hover:underline'>Privacy Policy</a>
                        </label>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;