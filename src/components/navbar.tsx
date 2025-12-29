import React from 'react';
    import { ShoppingCart, ChefHat } from 'lucide-react';

    const Navbar = ({ cartCount = 0 }: { cartCount?: number }) => {
      return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-orange-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <ChefHat className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  Gharelu<span className="text-orange-500">.shop</span>
                </span>
              </div>
              <button className="relative p-2 hover:bg-orange-50 rounded-full transition-colors">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      );
    };

    export default Navbar;