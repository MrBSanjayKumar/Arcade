import React, { useState, useMemo } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { FilterBar } from './components/FilterBar.jsx';
import { GameCard } from './components/GameCard.jsx';
import { Cart } from './components/Cart.jsx';
import { games } from './data/games.js';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['All', ...Array.from(new Set(games.map(game => game.category)))];

  const filteredAndSortedGames = useMemo(() => {
    let filtered = games.filter(game => {
      const matchesSearch =
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      case 'newest': filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)); break;
      default: filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleAddToCart = (game) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === game.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === game.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...game, quantity: 1 }];
    });

    toast.success(`${game.title} added to cart!`); // ✅ only here
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity === 0) { handleRemoveItem(id); return; }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster position="bottom-right" reverseOrder={false} />

      <Header
        cartItems={totalItems}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />

      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {selectedCategory === 'All' ? 'All Games' : selectedCategory}
            </h2>
            <p className="text-gray-400">
              {filteredAndSortedGames.length} games found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedGames.map(game => (
            <GameCard
              key={game.id}
              game={game}
              onAddToCart={handleAddToCart} // ✅ only here
            />
          ))}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;
