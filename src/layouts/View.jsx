import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ForkKnife, Couch, CookingPot, Briefcase, Bed, Armchair } from '@phosphor-icons/react';
import images from '../constant/images';

const View = () => {
    const [selectedRoom, setSelectedRoom] = useState(0);
    const viewerRef = useRef(null);
    const panoramaViewerRef = useRef(null);

    const roomTypes = [
        { name: "Dining Room", icon: <ForkKnife size={50} />, image: images.dinning },
        { name: "Living Room", icon: <Couch size={50} />, image: images.living },
        { name: "Kitchen", icon: <CookingPot size={50} />, image: images.kitchen },
        { name: "Office", icon: <Briefcase size={50} />, image: images.office },
        { name: "Bed Room", icon: <Bed size={50} />, image: images.waiting },
        { name: "Waiting Hall", icon: <Armchair size={50} />, image: images.bed_room }
    ];


      // Initialize Pannellum viewer
      useEffect(() => {
        if (!viewerRef.current || !roomTypes || !roomTypes[selectedRoom]) return;

        // Wait for pannellum to be available on window
        if (typeof window.pannellum === 'undefined') {
            // If pannellum is not loaded yet, wait a bit and retry
            const checkPannellum = setInterval(() => {
                if (typeof window.pannellum !== 'undefined') {
                    clearInterval(checkPannellum);
                    initializeViewer();
                }
            }, 100);

            return () => clearInterval(checkPannellum);
        }

        initializeViewer();

        function initializeViewer() {
            // Destroy existing viewer if it exists
            if (panoramaViewerRef.current) {
                try {
                    panoramaViewerRef.current.destroy();
                } catch (e) {
                    // Viewer might already be destroyed
                }
            }

            // Create new Pannellum viewer
            try {
                panoramaViewerRef.current = window.pannellum.viewer(viewerRef.current, {
                    type: 'equirectangular',
                    panorama: roomTypes[selectedRoom].image,
                    autoLoad: true,
                    autoRotate: 0,
                    compass: false,
                    showControls: false,
                    showFullscreenCtrl: false,
                    showZoomCtrl: false,
                    keyboardZoom: false,
                    mouseZoom: false,
                    hfov: 100,
                    minHfov: 50,
                    maxHfov: 150,
                });
            } catch (error) {
                console.error('Error initializing Pannellum viewer:', error);
            }
        }

        return () => {
            if (panoramaViewerRef.current) {
                try {
                    panoramaViewerRef.current.destroy();
                } catch (e) {
                    // Ignore destroy errors
                }
            }
        };
    }, [selectedRoom]);


    return (
        <>
            {/* Customized Furniture Section */}
            <section className=' py-16 '>
                <div className='text-center mb-12 space-y-3'>
                    <p className='text-[#DD7210] text-sm uppercase tracking-wider'>DIVERSE RANGE</p>
                    <h2 className='lg:text-4xl text-2xl md:text-5xl text-white font-bold'>Customized Furniture's</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='flex-1 relative'>
                        <div
                            ref={viewerRef}
                            className='relative w-full rounded-lg overflow-hidden'
                            style={{
                                aspectRatio: '16/9',
                                minHeight: '320px',
                            }}
                        />
                        <div className='absolute bottom-4 right-4 bg-[#DD7210] w-16 h-16 rounded-full flex items-center justify-center z-10 pointer-events-none'>
                            <span className='text-white font-bold text-xl'>360°</span>
                        </div>
                        <div className='absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs pointer-events-none'>
                            Drag to explore
                        </div>
                    </div>
                    <div className='flex-1 grid grid-cols-2 gap-4'>
                        {roomTypes.map((room, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedRoom(index)}
                                className={`p-6 rounded-lg transition-all hover:scale-105 flex items-center flex-col ${selectedRoom === index
                                        ? 'bg-[#DD7210] text-white'
                                        : 'bg-black/50 text-white border border-white/20 hover:border-[#DD7210]'
                                    }`}
                            >
                                <div className='text-4xl mb-2'>{room.icon}</div>
                                <p className='text-sm font-semibold'>{room.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section> 
        </>
    );
};

export default View;