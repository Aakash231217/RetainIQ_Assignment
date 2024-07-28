import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ProductFilter from './ProductFilter';

const StateRow = ({ state, variants, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: state.id });
  const [designs, setDesigns] = useState(Array(variants.length).fill(null));

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleFileUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newDesigns = [...designs];
        newDesigns[index] = e.target.result;
        setDesigns(newDesigns);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    e.preventDefault(); // Prevent default action
    onDelete(state.id);
  };

  return (
    <tr ref={setNodeRef} style={style} {...attributes} {...listeners} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center justify-between">
          <ProductFilter filter={state.filter} />
          <button 
            onClick={handleDelete} 
            className="text-red-500 hover:text-red-700"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </td>
      {variants.map((variant, index) => (
        <td key={index} className="px-6 py-4 whitespace-nowrap">
          <div className="relative w-40 h-24 bg-gray-200 rounded-md overflow-hidden">
            {designs[index] ? (
              <img src={designs[index]} alt="Uploaded design" className="w-full h-full object-cover" />
            ) : (
              <label htmlFor={`design-upload-${state.id}-${index}`} className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <span className="text-sm text-gray-500">Insert Design</span>
              </label>
            )}
            <input
              id={`design-upload-${state.id}-${index}`}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileUpload(index, e)}
            />
          </div>
        </td>
      ))}
    </tr>
  );
};

export default StateRow;