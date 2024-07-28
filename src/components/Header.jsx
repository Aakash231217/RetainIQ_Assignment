import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-4 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold">Test 3_staging</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Primary Feed</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">Publish Feed</button>
          </div>
        </div>
        <div className="mt-4 border-b border-gray-200"></div>
      </div>
    </header>
  );
};

export default Header;