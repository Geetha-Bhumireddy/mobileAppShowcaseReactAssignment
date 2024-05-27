import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUsSection from './components/AboutUsSection';
import FeaturesSection from './components/FeaturesSection';
import ContactUsSection from './components/ContactUsSection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/contact" element={<ContactUsSection />} />
      </Routes>
    </Router>
  );
};

export default App;
