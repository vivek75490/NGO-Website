import React from 'react';

const Home = () => {
    const handleScrollToVolunteer = (e) => {
        e.preventDefault();
        document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section text-white h-[80vh] md:h-screen flex items-center justify-center" style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://placehold.co/1200x800/a0aec0/ffffff?text=Community+Event') no-repeat center center/cover`}}>
            <div className="text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">Spreading Hope, Changing Lives</h1>
                <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">Join us in our mission to create a better world for everyone, one act of kindness at a time.</p>
                <a href="#volunteer" onClick={handleScrollToVolunteer} className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Become a Volunteer
                </a>
            </div>
        </section>
    );
};

export default Home;
