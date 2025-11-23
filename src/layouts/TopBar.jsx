import React, { useState, useEffect, useRef } from 'react';
import { MagnifyingGlass, User, CaretDown } from '@phosphor-icons/react';
import { FacebookLogo, InstagramLogo, TwitterLogo, PinterestLogo, LinkedinLogo } from '@phosphor-icons/react';

const TopBar = () => {
    const [currency, setCurrency] = useState('USD');
    const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
    const currencyMenuRef = useRef(null);

   

    // Close currency menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (currencyMenuRef.current && !currencyMenuRef.current.contains(event.target)) {
                setShowCurrencyMenu(false);
            }
        };

        if (showCurrencyMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCurrencyMenu]);

    return (
        <div className="bg-black/80 border-b border-[#D38638]/20 text-[13px] sm:text-sm">
            {/* Top Promotional Bar */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-4 sm:px-6 lg:px-16 py-3">
                <div className="flex flex-wrap items-center gap-3 text-gray-300 justify-center lg:justify-start">
                    <span className="text-white/70 text-xs uppercase tracking-[0.35em]">
                        Stay connected
                    </span>
                    <div className="flex items-center gap-3">
                        <FacebookLogo size={18} className="text-gray-400 hover:text-[#D38638] cursor-pointer transition-colors" />
                        <InstagramLogo size={18} className="text-gray-400 hover:text-[#D38638] cursor-pointer transition-colors" />
                        <TwitterLogo size={18} className="text-gray-400 hover:text-[#D38638] cursor-pointer transition-colors" />
                        <PinterestLogo size={18} className="text-gray-400 hover:text-[#D38638] cursor-pointer transition-colors" />
                        <LinkedinLogo size={18} className="text-gray-400 hover:text-[#D38638] cursor-pointer transition-colors" />
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-center lg:justify-end">
                    <p className="text-gray-300 text-xs sm:text-sm">
                        Join our scheme & earn rewards!
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm hidden sm:block">
                        Free shipping on orders over $100
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default TopBar;

