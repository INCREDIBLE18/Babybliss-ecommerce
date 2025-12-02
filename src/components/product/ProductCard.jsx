import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Rating from '../common/Rating';
import { formatPrice, formatDiscount } from '../../utils/helpers';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addItem);
  const { toggleItem, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    // Show notification
    if (Notification.permission === 'granted') {
      new Notification('Added to Cart! 🛒', {
        body: `${product.name} has been added to your cart`,
        icon: product.image,
      });
    }
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product);
  };

  const discount = formatDiscount(product.originalPrice, product.price);

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestseller && (
              <Badge variant="sale">⭐ Bestseller</Badge>
            )}
            {discount && (
              <Badge variant="danger">{discount}% OFF</Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlist}
              className="p-2 bg-white rounded-lg shadow-md hover:bg-primary-50"
            >
              <Heart
                className={`w-5 h-5 ${isWishlisted ? 'fill-primary-500 text-primary-500' : 'text-gray-700'}`}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-lg shadow-md hover:bg-primary-50"
            >
              <Eye className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>

          {/* Quick Add to Cart */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Category & Brand */}
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          
          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 flex-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mb-3">
            <Rating rating={product.rating} reviews={product.reviews} />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.badges?.slice(0, 2).map((badge) => (
              <Badge key={badge} variant="organic" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {product.inStock ? (
            <p className="text-sm text-green-600 mt-2">✓ In Stock</p>
          ) : (
            <p className="text-sm text-red-600 mt-2">Out of Stock</p>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
