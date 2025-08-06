import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';

function App() {
  // Add a simple global style for the font and scroll-padding
  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
    document.documentElement.style.scrollPaddingTop = '80px'; // Offset for fixed header
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Home />
        <About />
        <VolunteerForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
