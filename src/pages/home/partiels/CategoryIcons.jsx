import React from 'react';
import { Plant, Armchair, Lightbulb, Coffee, Package, FrameCornersIcon } from '@phosphor-icons/react';

const CategoryIcons = () => {
    const categories = [
        {
            icon: <Plant size={32} weight="fill" />,
            label: "Garden Decor"
        },
        {
            icon: <Armchair size={32} weight="fill" />,
            label: "Home Furniture's"
        },
        {
            icon: <Lightbulb size={32} weight="fill" />,
            label: "Ceiling Furniture's"
        },
        {
            icon: <Coffee size={32} weight="fill" />,
            label: "Tea Table"
        },
        {
            icon: <Package size={32} weight="fill" />,
            label: "Storage Solutions"
        },
        {
            icon: <FrameCornersIcon size={32} weight="fill" />,
            label: "Decoration Solutions"
        }
    ];

    return (
        <section className="py-16 px-8 md:px-16 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center gap-4 cursor-pointer group"
                        >
                            <div className="w-20 h-20 rounded-full bg-[#D38638] flex items-center justify-center text-white group-hover:bg-[#c77a2e] transition-colors">
                                {category.icon}
                            </div>
                            <p className="text-white text-sm text-center font-medium">
                                {category.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryIcons;

