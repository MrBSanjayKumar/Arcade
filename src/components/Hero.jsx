import React from 'react';
import { Star, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Epic Gaming
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Adventures
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Discover the latest and greatest games. From indie gems to AAA blockbusters, 
            find your next gaming obsession.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Browse Games</span>
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
              View Deals
            </button>
          </div>
          
          <div className="flex items-center mt-8 space-x-6 text-gray-300">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold">4.8</span>
              <span className="text-sm">Rating</span>
            </div>
            <div className="h-6 w-px bg-gray-600"></div>
            <div>
              <span className="text-lg font-semibold">10M+</span>
              <span className="text-sm ml-1">Players</span>
            </div>
            <div className="h-6 w-px bg-gray-600"></div>
            <div>
              <span className="text-lg font-semibold">5000+</span>
              <span className="text-sm ml-1">Games</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
