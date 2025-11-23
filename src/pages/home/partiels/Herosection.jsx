import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import images from '../../../constant/images';

const Herosection = () => {
    return (
        <section className="py-16 flex flex-col gap-10 lg:gap-16">
            <div className='flex flex-col lg:flex-row items-start gap-8 lg:items-center'>
                <div className="flex-1 space-y-4 text-center lg:text-left">
                    <p className="text-[#D38638] text-xs sm:text-sm uppercase tracking-[0.35em]">
                        Sleek and stylish
                    </p>
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
                        Innovative Furniture's
                    </h1>
                </div>
                <div className="flex-1 text-center lg:text-right">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        Class aptent taciti. Ut eleifend mattis ligula, porta finibus urna gravida at.
                        Aenean vehiculles arcu non mattis. Integer dapibus ac dui pretium blandit.
                    </p>
                </div>
            </div>
            <div>
                <img className='rounded-2xl w-full object-cover max-h-[600px]' src={images.home_hotspot} alt="Innovative Furniture" />
            </div>
        </section>
    );
};

export default Herosection;