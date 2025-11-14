import React, { useState } from 'react';
import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import Footer from './components/common/Footer';

function App() {
  // State to manage which section is currently visible
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col">
      {/* Pass the state setter function to the Header */}
      <Header setActiveSection={setActiveSection} />
      <div className="flex-grow">
        {/* Pass the active section and the setter to the HomePage */}
        <HomePage activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <Footer />
    </div>
  )
}

export default App;
