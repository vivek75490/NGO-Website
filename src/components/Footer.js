import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Unity Foundation. All Rights Reserved.</p>
            <p className="text-gray-400 mt-2">123 Hope Street, New Delhi, India</p>
            <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a>
            </div>
        </div>
    </footer>
);

export default Footer;
