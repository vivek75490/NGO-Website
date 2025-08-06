import React from 'react';

const About = () => (
    <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">About Unity Foundation</h2>
                <p className="text-gray-600 mt-2 text-lg">Our Mission, Vision, and Values</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                <div className="md:w-1/2">
                    <img src="https://placehold.co/600x400/e2e8f0/333333?text=Our+Team" alt="Our Team" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">Who We Are</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        The Unity Foundation is a non-profit organization dedicated to providing support and resources to underprivileged communities. We believe in the power of collective action and strive to create sustainable solutions for education, healthcare, and environmental conservation.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Founded in 2015, our team is composed of passionate individuals from diverse backgrounds, all united by a common goal: to make a tangible difference in the world. We partner with local communities to ensure our efforts are impactful and respectful of their culture and needs.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default About;
