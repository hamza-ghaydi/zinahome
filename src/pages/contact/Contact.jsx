import React, { useState, useRef } from 'react';
import images from '../../constant/images';
import { Link } from 'react-router-dom';
import { 
    MapPin, 
    Phone, 
    Envelope, 
    Clock,
    PaperPlaneTilt,
    User,
    ChatText
} from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            //! email js not config yet
            await emailjs.sendForm( // Replace with your EmailJS Service ID
                'YOUR_TEMPLATE_ID',       
                formRef.current,
                'YOUR_PUBLIC_KEY'         
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Email send error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: <MapPin size={28} weight="fill" />,
            title: "Visit Us",
            info: "123 Furniture Street, Design District",
            details: "New York, NY 10001"
        },
        {
            icon: <Phone size={28} weight="fill" />,
            title: "Call Us",
            info: "+1 (555) 123-4567",
            details: "Mon-Fri 9am-6pm EST"
        },
        {
            icon: <Envelope size={28} weight="fill" />,
            title: "Email Us",
            info: "info@furniture.com",
            details: "We reply within 24 hours"
        },
        {
            icon: <Clock size={28} weight="fill" />,
            title: "Working Hours",
            info: "Monday - Friday: 9AM - 6PM",
            details: "Saturday: 10AM - 4PM"
        }
    ];

    return (
        <div className='min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16'>
            {/* Hero Section */}
            <div className='mt-8 lg:mt-0 relative w-full h-[35vh] flex items-center justify-center mb-16'>
                <img 
                    className='absolute w-full h-full rounded-xl object-cover' 
                    src={images.home_hotspot} 
                    alt="Contact Us" 
                />
                <div className='bg-black/75 rounded-xl absolute z-10 w-full h-full'></div>
                <div className='z-40 space-y-3 text-center'>
                    <h1 className='text-5xl text-white font-bold'>Contact Us</h1>
                    <div className='flex items-center justify-center gap-3 text-white'>
                        <Link className='text-white/70 uppercase hover:text-white transition-colors' to="/">
                            HOME
                        </Link>
                        <span>/</span>
                        <Link className='text-white uppercase' to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <div className='text-center mb-16 space-y-4'>
                <p className='text-[#DD7210] text-sm uppercase tracking-wider'>GET IN TOUCH</p>
                <h2 className='lg:text-5xl text-3xl text-white font-bold'>
                    We'd Love To Hear From You
                </h2>
                <p className='text-white/60 text-base max-w-2xl mx-auto'>
                    Have questions about our furniture? Need assistance with an order? 
                    Our team is here to help you create the perfect space.
                </p>
            </div>

            {/* Contact Info Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
                {contactInfo.map((item, index) => (
                    <div 
                        key={index}
                        className='bg-black/50 rounded-xl p-6 text-center space-y-4 border border-white/10 hover:border-[#DD7210] transition-all duration-300'
                    >
                        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DD7210]/20 text-[#DD7210]'>
                            {item.icon}
                        </div>
                        <h3 className='text-white text-xl font-semibold'>{item.title}</h3>
                        <p className='text-white/80 text-base'>{item.info}</p>
                        <p className='text-white/60 text-sm'>{item.details}</p>
                    </div>
                ))}
            </div>

            {/* Contact Form and Map Section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16'>
                {/* Contact Form */}
                <div className='bg-black/50 rounded-xl p-8 border border-white/10'>
                    <div className='mb-8 space-y-3'>
                        <h3 className='text-3xl text-white font-bold'>Send Us A Message</h3>
                        <p className='text-white/60'>
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className='mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400'>
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className='mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400'>
                            Oops! Something went wrong. Please try again.
                        </div>
                    )}

                    <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <label htmlFor="name" className='text-white/80 text-sm mb-2 block'>
                                    Your Name *
                                </label>
                                <div className='relative'>
                                    <User 
                                        size={20} 
                                        className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40'
                                    />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className='w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#DD7210] focus:outline-none transition-colors'
                                        placeholder='John Doe'
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className='text-white/80 text-sm mb-2 block'>
                                    Email Address *
                                </label>
                                <div className='relative'>
                                    <Envelope 
                                        size={20} 
                                        className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40'
                                    />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className='w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#DD7210] focus:outline-none transition-colors'
                                        placeholder='john@example.com'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <label htmlFor="phone" className='text-white/80 text-sm mb-2 block'>
                                    Phone Number
                                </label>
                                <div className='relative'>
                                    <Phone 
                                        size={20} 
                                        className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40'
                                    />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#DD7210] focus:outline-none transition-colors'
                                        placeholder='+1 (555) 123-4567'
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className='text-white/80 text-sm mb-2 block'>
                                    Subject *
                                </label>
                                <div className='relative'>
                                    <ChatText 
                                        size={20} 
                                        className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40'
                                    />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className='w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#DD7210] focus:outline-none transition-colors'
                                        placeholder='How can we help?'
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className='text-white/80 text-sm mb-2 block'>
                                Your Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#DD7210] focus:outline-none transition-colors resize-none'
                                placeholder='Tell us more about your inquiry...'
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='w-full bg-[#DD7210] text-white py-4 rounded-lg font-semibold hover:bg-[#DD7210]/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isSubmitting ? (
                                'Sending...'
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <PaperPlaneTilt size={20} weight="fill" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className='bg-black/50 rounded-xl overflow-hidden border border-white/10 h-full min-h-[600px]'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117041.9183928042!2d-7.669565162665924!3d33.57240311781826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e1!3m2!1sfr!2sma!4v1763987346612!5m2!1sfr!2sma"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='grayscale hover:grayscale-0 transition-all duration-300'
                    />
                </div>
            </div>

            {/* FAQ or Additional Info Section */}
            <div className='bg-black/50 rounded-xl p-8 border border-white/10'>
                <div className='text-center mb-8 space-y-3'>
                    <p className='text-[#DD7210] text-sm uppercase tracking-wider'>
                        FREQUENTLY ASKED
                    </p>
                    <h3 className='text-3xl text-white font-bold'>
                        Common Questions
                    </h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-3'>
                        <h4 className='text-white text-lg font-semibold'>
                            What are your delivery options?
                        </h4>
                        <p className='text-white/60 text-base'>
                            We offer standard and express delivery options. Delivery times vary based on your location and product availability.
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <h4 className='text-white text-lg font-semibold'>
                            Do you offer custom furniture?
                        </h4>
                        <p className='text-white/60 text-base'>
                            Yes! We specialize in custom furniture design. Contact us to discuss your specific requirements and preferences.
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <h4 className='text-white text-lg font-semibold'>
                            What is your return policy?
                        </h4>
                        <p className='text-white/60 text-base'>
                            We offer a 30-day return policy on most items. Please review our full return policy on our website.
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <h4 className='text-white text-lg font-semibold'>
                            How can I track my order?
                        </h4>
                        <p className='text-white/60 text-base'>
                            Once your order ships, you'll receive a tracking number via email to monitor your delivery status.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;