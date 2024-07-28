import React from 'react';

const ProductFilter = ({ filter }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </span>
      <div className="flex items-center">
        <span className="text-sm font-medium text-gray-700">Product Collection</span>
        <span className="ml-2 px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">contains</span>
        <span className="ml-2 text-sm text-gray-500">{filter}</span>
      </div>
    </div>
  );
};

export default ProductFilter;