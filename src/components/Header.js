import React, { useState } from 'react';

// Helper Components for navigation links
const NavLink = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="text-gray-600 hover:text-blue-600 transition duration-300">
        {children}
    </a>
);

const MobileNavLink = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="block py-3 px-6 text-gray-600 hover:bg-gray-100 transition duration-300">
        {children}
    </a>
);

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        closeMobileMenu();
    };

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-2xl font-bold text-gray-800">
                    Unity<span className="text-blue-600">Foundation</span>
                </a>
                
                <button 
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <div className="hidden md:flex items-center space-x-6">
                    <NavLink href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</NavLink>
                    <NavLink href="#about" onClick={(e) => handleScroll(e, 'about')}>About Us</NavLink>
                    <a href="#volunteer" onClick={(e) => handleScroll(e, 'volunteer')} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                        Volunteer
                    </a>
                </div>
            </nav>
            
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <MobileNavLink href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</MobileNavLink>
                    <MobileNavLink href="#about" onClick={(e) => handleScroll(e, 'about')}>About Us</MobileNavLink>
                    <MobileNavLink href="#volunteer" onClick={(e) => handleScroll(e, 'volunteer')}>Volunteer</MobileNavLink>
                </div>
            )}
        </header>
    );
};

export default Header;
