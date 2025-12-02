import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Button from '../components/common/Button';
import { formatPrice } from '../utils/helpers';
import Card from '../components/common/Card';

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCartStore();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <Button size="lg" icon={ShoppingBag}>
              Start Shopping
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{items.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover={false} className="p-4">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold text-gray-900 hover:text-primary-500 mb-1">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                      <p className="text-lg font-bold text-primary-500">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                      >
                        <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                      </button>

                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-white rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-white rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>

                      <p className="text-sm text-gray-600">
                        Total: {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Clear Cart Button */}
            <Button
              variant="ghost"
              onClick={clearCart}
              icon={Trash2}
              className="text-red-500 hover:bg-red-50"
            >
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card hover={false} className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.length} items)</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">
                    {total >= 1999 ? 'FREE' : formatPrice(99)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (GST 18%)</span>
                  <span className="font-medium">{formatPrice(total * 0.18)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary-500">
                      {formatPrice(total + (total >= 1999 ? 0 : 99) + total * 0.18)}
                    </span>
                  </div>
                </div>
              </div>

              {total < 1999 && (
                <div className="mb-6 p-4 bg-secondary-50 rounded-xl">
                  <p className="text-sm text-secondary-700">
                    🚚 Add <strong>{formatPrice(1999 - total)}</strong> more to get FREE shipping!
                  </p>
                </div>
              )}

              <Link to="/checkout">
                <Button className="w-full" size="lg" icon={ArrowRight} iconPosition="right">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/products">
                <Button variant="outline" className="w-full mt-3">
                  Continue Shopping
                </Button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Easy Returns</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>100% Genuine Products</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
