import React from 'react';
import './App.css';
// Import my component i created
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Books from './components/Books';
import Bio from './components/Bio';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <main style={{ marginTop: '80px' }}> 
        {/*  adding margin so the Hero doesn't hide under the fixed Navbar */
        <Hero />}
        <Books />
        <Bio />
        <Blog />
        <h1 style={{ textAlign: 'center' }}>Welcome to the Author's Portfolio</h1>
      </main>
    </div>
  );
}

export default App;