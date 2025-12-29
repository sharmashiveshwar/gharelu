"use client";

import React from 'react';
import { Plus, Star } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isAvailable: boolean;
  rating: number;
}

const MenuCard = ({ item }: { item: FoodItem }) => {
  // Get the addToCart function from our store
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow group ${!item.isAvailable ? 'opacity-60 grayscale' : ''}`}>
      
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold">Sold Out</span>
          </div>
        )}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-xs font-bold text-gray-800">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          {item.rating}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{item.name}</h3>
          <span className="font-bold text-orange-600">₹{item.price}</span>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>
        
        <button 
          onClick={() => addToCart(item)} 
          disabled={!item.isAvailable}
          className={`w-full py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors active:scale-95 ${
            item.isAvailable 
              ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {item.isAvailable ? (
            <>
              <Plus className="w-4 h-4" /> Add to Cart
            </>
          ) : (
            'Unavailable'
          )}
        </button>
      </div>
    </div>
  );
};

export default MenuCard;