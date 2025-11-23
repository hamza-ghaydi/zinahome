import React from 'react';
import Herosection from './partiels/Herosection';
import FeatureBar from './partiels/FeatureBar';
import CategoryIcons from './partiels/CategoryIcons';
import ProductSection from './partiels/ProductSection';
import View from '../../layouts/View';

const Home = () => {
    return (
        <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Herosection />
            <FeatureBar />
            <View />
            
            <ProductSection 
                category="Home decoration"
                title="Home Decoration"
                description="Transform your living spaces with our curated collection of home decoration items. From elegant lamps to comfortable seating, find pieces that reflect your personal style and create a welcoming atmosphere."
                showViewAll={false}
            />
            
            
            
            <ProductSection
                category="Office decoration"
                title="Office Decoration"
                description="Enhance your workspace with functional and stylish office decoration. Our collection includes ergonomic furniture, organizational solutions, and decorative accents that boost productivity and create a professional environment."
                showViewAll={true}
            />
            
            
            
            <ProductSection 
                category="Outdoor decoration"
                title="Outdoor Decoration"
                description="Create beautiful outdoor spaces with our weather-resistant decoration collection. Perfect for gardens, patios, and balconies, these pieces combine durability with elegant design to enhance your outdoor living experience."
                showViewAll={true}
            />
            
            
            
            <ProductSection
                category="Indoor decoration"
                title="Indoor Decoration"
                description="Discover indoor decoration pieces that bring comfort and style to your home. From cozy pillows to elegant lighting, our collection helps you create inviting spaces that reflect your unique taste and lifestyle."
                showViewAll={true}
            />
            
            <CategoryIcons />
            
        </div>
    );
};

export default Home;