import React from 'react';
import { Filter, Grid, List } from 'lucide-react';

export const FilterBar = ({ categories, selectedCategory, onCategoryChange, sortBy, onSortChange }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border-y border-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
          {/* Categories */}
          <div className="flex items-center space-x-4 overflow-x-auto pb-2 lg:pb-0">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sort and View Options */}
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>

            <div className="flex items-center space-x-2 border border-gray-700 rounded-lg p-1">
              <button className="p-2 text-purple-400 bg-gray-800 rounded">
                <Grid className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
