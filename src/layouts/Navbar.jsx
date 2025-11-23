import React, { useState } from 'react';
import images from '../constant/images';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, List, X, User } from '@phosphor-icons/react';
import { useCart } from '../context/CartContext.jsx';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();

    const menuItems = [
        { name: 'HOME', link: '/' },
        { name: 'ABOUT', link: '/about' },
        { name: 'SHOP', link: '/shop' },
        { name: 'BLOG', link: '/blog' },
        { name: 'CONTACT US', link: '/contact' },
    ];

    const handleNavigate = (link) => {
        navigate(link);
        setIsMenuOpen(false);
    };

    return (
        <div className='bg-black/90 border-b border-white/5'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3'>
                <div
                    className='flex items-center gap-3 cursor-pointer'
                    onClick={() => handleNavigate('/')}
                >
                    <img className='w-12' src={images.logo} alt="Zina Home" />
                    <h2 className="text-white text-2xl font-bold hidden md:block">
                        <span className="text-[#D38638]">Zina</span>Home
                    </h2>
                </div>

                <nav className='hidden lg:flex items-center gap-6'>
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavigate(item.link)}
                            className='text-white hover:text-[#D38638] cursor-pointer text-sm font-medium uppercase tracking-wide transition-colors bg-transparent border-none'
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    {/* <User size={26} className="text-gray-300 hover:text-[#D38638] cursor-pointer transition-colors" /> */}
                    <button
                        onClick={() => navigate('/cart')}
                        className="relative rounded-full border border-transparent p-2 hover:border-[#D38638] transition-colors cursor-pointer"
                        aria-label="View cart"
                    >

                        <ShoppingCart size={26} className="text-gray-300 hover:text-[#D38638]" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#D38638] text-xs font-semibold text-black px-1">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? <X size={26} /> : <List size={26} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden border-t border-white/5 px-4 sm:px-6 pb-4">
                    <nav className="flex flex-col gap-2 pt-3">
                        {menuItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavigate(item.link)}
                                className="w-full text-left rounded-full px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 uppercase tracking-[0.2em]"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
