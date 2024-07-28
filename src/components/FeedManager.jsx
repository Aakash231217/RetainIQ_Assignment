import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import StateRow from './StateRow';
import AddButton from './AddButton';

const FeedManager = () => {
  const [states, setStates] = useState([
    { id: '1', filter: 'Anarkali Kurtas' },
    { id: '2', filter: 'Anarkali Kurtas' },
  ]);
  const [variants, setVariants] = useState(['Primary Variant', 'Variant 2']);

  const addState = () => {
    const newState = { id: String(Date.now()), filter: 'New Filter' };
    setStates(prevStates => [...prevStates, newState]);
  };

  const addVariant = () => {
    setVariants(prevVariants => [...prevVariants, `Variant ${prevVariants.length + 1}`]);
  };

  const deleteState = (id) => {
    setStates(prevStates => prevStates.filter(state => state.id !== id));
  };

  const deleteVariant = (index) => {
    setVariants(prevVariants => prevVariants.filter((_, i) => i !== index));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active && over && active.id !== over.id) {
      setStates((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  Product Filter
                </th>
                {variants.map((variant, index) => (
                  <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center justify-between">
                      <span>{variant}</span>
                      <button onClick={() => deleteVariant(index)} className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <SortableContext items={states.map(s => s.id)} strategy={verticalListSortingStrategy}>
              <tbody>
                {states.map((state) => (
                  <StateRow 
                    key={state.id} 
                    state={state} 
                    variants={variants} 
                    onDelete={() => deleteState(state.id)} 
                  />
                ))}
              </tbody>
            </SortableContext>
          </table>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <AddButton onClick={addState} label="Add State" />
        <AddButton onClick={addVariant} label="Add Variant" />
      </div>
    </DndContext>
  );
};

export default FeedManager;