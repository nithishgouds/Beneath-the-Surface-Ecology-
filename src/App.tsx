import React from 'react';
import { BarChart3Icon } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <About />
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 IIT Tirupati Water Conservation Initiative</p>
        </div>
      </footer>
    </div>
  );
}

export default App;