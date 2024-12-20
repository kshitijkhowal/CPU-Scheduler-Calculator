import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ListOfAlgorithms from '../components/ListOfAlgorithms.jsx';
import Footer from '../components/Footer.jsx';

const HomeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Navbar */}
      <Navbar title="CPU Scheduling Algorithms" />

      {/* List of Algorithms */}
      <main className="flex-grow flex items-center justify-center">
        <ListOfAlgorithms />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
