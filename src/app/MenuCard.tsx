"use client"; // This is a client component because we will add interactivity later

import React from 'react';
import Navbar from '../components/Navbar';
import MenuCard from '../components/MenuCard';
import { Search } from 'lucide-react';

// Temporary Mock Data (We will replace this with Firebase in Module 2)
const MOCK_MENU = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich tomato and butter gravy.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=1000',
    isAvailable: true,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Dal Makhani',
    description: 'Black lentils cooked overnight with cream and spices.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000',
    isAvailable: true,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Garlic Naan',
    description: 'Soft Indian bread topped with minced garlic and coriander.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=1000',
    isAvailable: true,
    rating: 4.5
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar cartCount={0} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Gharelu Flavors
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Authentic home-cooked meals delivered to your doorstep.
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Today's Menu</h2>
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_MENU.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}