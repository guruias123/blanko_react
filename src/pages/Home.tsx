import React, { useState } from 'react';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import LandingPageCard from '../components/LandingPageCard';

const Home = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="min-h-screen bg-white font-inter">
            {/* Header */}
            {/* <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 backdrop-blur-sm border-b border-white border-opacity-10 h-full"> */}
            <header className={`fixed top-0 left-0 right-0 bg-black text-white z-50 backdrop-blur-sm border-b border-white border-opacity-10 ${isMobileMenuOpen ? 'h-full' : ''}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-16">
                            <div className="flex items-center">
                                <img src='/assets/blanko_logo.png' alt='Blanko Logo' className='w-24 h-auto' />
                            </div>
                            <div className="hidden lg:block bg-gray-800 rounded px-3 py-1">
                                <span className="text-white text-sm">mail@blanko.com</span>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-16">
                            <nav className="flex gap-8">
                                <a href="#landing" className="text-white hover:text-orange-500 transition-colors font-medium">Landing</a>
                                <a href="#pages" className="text-white hover:text-orange-500 transition-colors font-medium">All pages</a>
                                <a href="#template" className="text-white hover:text-orange-500 transition-colors font-medium">Template</a>
                            </nav>
                            <button className="bg-orange-500 text-[#000000] hover:bg-orange-600 px-8 py-3 rounded-md font-bold text-lg transition-colors">
                                Purchase template
                            </button>
                        </div>

                        <button
                            className="lg:hidden flex justify-center items-center w-7 h-7 cursor-pointer"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle navigation"
                        >
                            {isMobileMenuOpen ? (
                                <img src="/assets/exit.png" alt="Close menu" className="w-5 h-5" />
                            ) : (
                                <div className="flex flex-col justify-center items-center">
                                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                                    <span className="block w-5 h-0.5 bg-white"></span>
                                </div>
                            )}
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        // <div className="lg:hi÷dden absolute top-full left-0 right-0 bg-black">
                        <div className="lg:hidden bg-black z-50">
                            <div className="px-6 pt-10 py-4">
                                <div className="bg-gray-800 rounded px-3 py-2 mb-5 w-fit">
                                    <span className="text-white text-sm">mail@blanko.com</span>
                                </div>
                                <nav className="flex flex-row gap-4 mb-8">
                                    <a href="#landing" className="text-white hover:text-orange-500 transition-colors font-medium py-2">Landing</a>
                                    <a href="#pages" className="text-white hover:text-orange-500 transition-colors font-medium py-2">All pages</a>
                                    <a href="#template" className="text-white hover:text-orange-500 transition-colors font-medium py-2">Template</a>
                                </nav>
                                <button className="bg-orange-500 text-[#000000] hover:bg-orange-600 px-8 py-3 rounded-md font-bold text-lg transition-colors w-fit">
                                    Purchase template
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-[#FF7143] relative overflow-hidden pt-20 pb-16 lg:pt-0 lg:pb-0">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="text-center ">
                            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-black">
                                Blanko template
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-black/90 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris
                                porttitor ante vulputate.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:flex-col gap-4 justify-center lg:justify-start">
                                <button className="bg-black text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                                    Purchase template
                                </button>
                                <button className="bg-white text-black border-2 border-white px-8 py-4 rounded-md font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                                    Other templates
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-center lg:justify-end mt-8 lg:mt-[-6px]">
                            <img src="/assets/banner_image.png" alt="Mobile App Mockup" className="w-full max-w-md lg:max-w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <FeatureCard 
                            iconSrc="/assets/speed.png"
                            iconAlt="Speed Icon"
                            title="Speed"
                            description="Open a commercial-grade current account from anywhere"
                        />
                        <FeatureCard 
                            iconSrc="/assets/Design.png"
                            iconAlt="Design Icon"
                            title="Design"
                            description="Open a commercial-grade current account from anywhere"
                        />
                        <FeatureCard 
                            iconSrc="/assets/modularity.png"
                            iconAlt="Modularity Icon"
                            title="Modularity"
                            description="Open a commercial-grade current account from anywhere"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-50"></div>
                <TestimonialCard 
                    companyName="DRUK"
                    testimonialText="Join a community of industry leading professionals. Join a community of industry leading professionals."
                    authorName="Laura Paula"
                    authorTitle="Director @Company"
                    isActive={true}
                />
            </section>

            {/* Landing Pages Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-gray-900">Landing pages</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        <LandingPageCard
                            imageSrc="/assets/landing_page_one.png"
                            imageAlt="Landing page one - Blanko template showcase"
                            title="Landing one"
                        />
                        <LandingPageCard
                            imageSrc="/assets/landing_page_two.png"
                            imageAlt="Landing page two - Launch your fastest Webflow site"
                            title="Landing two"
                        />
                        <LandingPageCard
                            imageSrc="/assets/landing_page_three.png"
                            imageAlt="Landing page three - Build quickly and easily"
                            title="Landing three"
                        />
                        <LandingPageCard
                            imageSrc="/assets/landing_page_four.png"
                            imageAlt="Landing page four - Working with Blanko template"
                            title="Landing four"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-8 sm:py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Main Footer Content */}
                    <div className="space-y-6 mb-8">
                        {/* Logo and Button Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <img src='/assets/blanko_logo.png' alt='Blanko Logo' className='w-24 h-auto' />
                            <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors lg:w-fit">
                                Get on Webflow
                            </button>
                        </div>

                        {/* Navigation and Social Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            {/* Navigation Links */}
                            <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-400">
                                <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
                                <a href="#landing" className="hover:text-white transition-colors">Landing one</a>
                                <a href="#signup" className="hover:text-white transition-colors">Sign up</a>
                                <a href="#templates" className="hover:text-white transition-colors">Other templates</a>
                            </div>
                            
                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Instagram">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Twitter">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Facebook">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-800 pt-4 sm:pt-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400 gap-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                <div className="flex items-center">
                                    <span>Powered by</span>
                                    <img src="/assets/webflow.png" alt="Webflow" className="ml-2 h-4" />
                                </div>
                                <div className="flex items-center">
                                    <span>Designed by</span>
                                    <span className="ml-2 text-orange-500 font-medium">Veljko</span>
                                </div>
                            </div>
                            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
