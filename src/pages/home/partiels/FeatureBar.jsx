import React from 'react';
import { Leaf, Armchair, Heart, Ruler } from '@phosphor-icons/react';

const FeatureBar = () => {
    const features = [
        {
            icon: <Leaf size={50}  />,
            text: "Ensure Durability And Longevity."
        },
        {
            icon: <Armchair size={50} />,
            text: "Diverse Range Of Furniture's."
        },
        {
            icon: <Heart size={50}  />,
            text: "Comfort And High Functionality."
        },
        {
            icon: <Ruler size={50} />,
            text: "Tailored Furniture For Specific"
        }
    ];

    return (
        <section className="py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 text-white max-w-[180px] text-center">
                        <div className="flex-shrink-0 text-[#D38638]">
                            {feature.icon}
                        </div>
                        <p className="text-sm md:text-base font-medium leading-snug">{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureBar;

