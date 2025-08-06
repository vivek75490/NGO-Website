import React, { useState } from 'react';

const VolunteerForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        event.target.reset();

        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <section id="volunteer" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Join Our Cause</h2>
                    <p className="text-gray-600 mt-2 text-lg">Fill out the form below to become a part of our volunteer team.</p>
                </div>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        {/* Form fields are unchanged */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" id="firstName" name="firstName" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" id="lastName" name="lastName" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="mt-6">
                             <label className="block text-sm font-medium text-gray-700">Areas of Interest</label>
                             <div className="mt-2 space-y-2">
                                 <div className="flex items-center">
                                     <input id="interest-education" name="interest" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                     <label htmlFor="interest-education" className="ml-3 block text-sm text-gray-700">Education & Mentoring</label>
                                 </div>
                                 <div className="flex items-center">
                                     <input id="interest-events" name="interest" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                     <label htmlFor="interest-events" className="ml-3 block text-sm text-gray-700">Event Planning & Support</label>
                                 </div>
                                 <div className="flex items-center">
                                     <input id="interest-environment" name="interest" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                     <label htmlFor="interest-environment" className="ml-3 block text-sm text-gray-700">Environmental Projects</label>
                                 </div>
                             </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Why do you want to volunteer?</label>
                            <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500" required></textarea>
                        </div>
                        <div className="mt-8 text-center">
                            <button type="submit" className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit Application</button>
                        </div>
                    </form>
                    {isSubmitted && (
                        <div className="mt-6 text-center text-green-600 font-medium">
                            Thank you for your interest! We've received your application and will be in touch soon.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VolunteerForm;

