import React from 'react';
import { FacebookLogo, InstagramLogo, TwitterLogo, PinterestLogo, LinkedinLogo } from '@phosphor-icons/react';
import images from '../constant/images';


const Footer = () => {
    const usefulLinks = [
        "History",
        "Our Team",
        "Privacy Policy",
        "Services Offered",
        "Product Catalog"
    ];

    const information = [
        "FAQ/Return",
        "Privacy/Terms",
        "Affiliate",
        "Sizing Guide",
        "Accessibility"
    ];

    const support = [
        "Your Account",
        "Press Release",
        "Return Centre",
        "App Download",
        "Advertisements"
    ];

    const socialIcons = [
        { icon: <FacebookLogo size={20} weight="fill" />, name: "Facebook" },
        { icon: <InstagramLogo size={20} weight="fill" />, name: "Instagram" },
        { icon: <TwitterLogo size={20} weight="fill" />, name: "Twitter" },
        { icon: <PinterestLogo size={20} weight="fill" />, name: "Pinterest" },
        { icon: <LinkedinLogo size={20} weight="fill" />, name: "LinkedIn" }
    ];

    const posts = [images.post_1, images.post_2, images.post_3, images.post_4, images.post_5, images.post_6,]



    return (
        <footer className="bg-black border-t border-[#dd7210]/20">
            <div className="max-w-9xl mx-auto px-4 sm:px-8 md:px-16 pt-9">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Left Column - Brand */}
                    <div>
                        <div className='flex flex-col items-center cursor-pointer p-3'>
                            <img className='w-25' src={images.logo} alt="" />
                            <h2 className="text-white text-2xl font-bold hidden md:block">
                                <span className="text-[#D38638]">Zina</span>Home
                            </h2>
                        </div>
                        <p className="text-gray-400 text-center text-sm leading-relaxed mb-6">
                            Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus
                        </p>
                        <div className="flex gap-4 items-center justify-center">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-gray-400 hover:text-[#D38638] transition-colors"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-8'>
                        {/* Useful Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-[#D38638] text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Information</h3>
                        <ul className="space-y-2">
                            {information.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-[#D38638] text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            {support.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-[#D38638] text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Instagram Section */}
                <div className="mb-8">
                    <h3 className="text-white text-lg font-semibold mb-4">Follow @instagram</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 gap-2" >
                        {posts.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`post-${index}`}
                                className="lg:w-full h-auto w-15  rounded-lg object-cover"
                            />
                        ))}
                    </div>
                </div>
                </div>

                


                {/* Bottom Bar */}
                <div className="border-t border-gray-800  flex flex-col md:flex-row justify-between items-center lg:gap-4">
                    <p className="text-gray-400 text-sm">
                        ©Zina Home site all rights Reserved
                    </p>

                    <a href="https://hamza-rhaidi.vercel.app/" className='text-amber-50 flex items-center gap-2 p-2'>
                    Powred by
                    {/* <span className='text-[#dd7210]'>HAMZA RHAIDI</span> */}
                    <div className='bg-[#8ACE00] lg:p-1 rounded-full'>
                    <img className='lg:w-10 w-6' src="https://hamza-rhaidi.vercel.app/assets/logo-j4_gHrFO.png" alt="" />
                    </div>
                    </a>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;

