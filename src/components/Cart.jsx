import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast'; // ✅ import toast

export const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  const handleRemoveItem = (id, title) => {
    onRemoveItem(id);
    toast.error(`${title} removed from cart!`); // ✅ toast for removal
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end">
      <div className="bg-gray-900 w-full max-w-md h-full shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Shopping Cart ({itemCount})</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 max-h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">Your cart is empty</div>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <p className="text-gray-400 text-sm">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id, item.title)}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors ml-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-white">Total</span>
              <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
