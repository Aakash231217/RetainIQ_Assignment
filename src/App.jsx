import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeedManager from './components/FeedManager';
function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-1 ml-16"> {/* Add ml-16 to offset the navbar width */}
        <Header />
        <main className="container mx-auto px-4 py-8">
          <FeedManager />
        </main>
      </div>
    </div>
  );
}

export default App;