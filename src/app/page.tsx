"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MenuCard from '../components/MenuCard';
import { Search, AlertCircle } from 'lucide-react'; // Added AlertCircle for error icon
import { db } from '../lib/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';

// Define the shape of a food item
interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isAvailable: boolean;
  rating: number;
}

export default function Home() {
  const [menuItems, setMenuItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // New error state

  // Fetch data from Firebase Real-time
  useEffect(() => {
    const q = query(collection(db, 'menu'));
    
    // onSnapshot listens for changes instantly
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as FoodItem[];
        
        setMenuItems(items);
        setLoading(false);
        setError(null); // Clear error on success
      },
      (err) => {
        console.error("Firebase Error:", err);
        // Set a user-friendly error message
        setError("Access denied. Please check your Firebase Security Rules.");
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup listener when leaving page
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
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

        {/* Error State */}
        {error && (
          <div className="text-center py-20 bg-red-50 rounded-xl border border-red-100 mb-8">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-red-800">Connection Error</h3>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Loading deliciousness...</p>
          </div>
        ) : !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}