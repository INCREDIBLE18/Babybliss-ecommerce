import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/common/Button';
import { FILTER_OPTIONS } from '../utils/constants';
import productsData from '../data/products.json';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedAgeRange, setSelectedAgeRange] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBadges, setSelectedBadges] = useState([]);

  const toggleBadge = (badge) => {
    setSelectedBadges(prev =>
      prev.includes(badge)
        ? prev.filter(b => b !== badge)
        : [...prev, badge]
    );
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...productsData.products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (max) {
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      } else {
        filtered = filtered.filter(p => p.price >= min);
      }
    }

    // Age range filter
    if (selectedAgeRange !== 'all') {
      filtered = filtered.filter(p => p.ageRange?.includes(selectedAgeRange));
    }

    // Badge filter
    if (selectedBadges.length > 0) {
      filtered = filtered.filter(p =>
        p.badges?.some(badge => selectedBadges.includes(badge))
      );
    }

    // Sorting
    switch (selectedSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedAgeRange, selectedSort, selectedBadges]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedAgeRange('all');
    setSelectedBadges([]);
  };

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPriceRange !== 'all',
    selectedAgeRange !== 'all',
    selectedBadges.length > 0,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">All Products</h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {productsData.products.length} products
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-6 shadow-card sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    icon={X}
                  >
                    Clear ({activeFiltersCount})
                  </Button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {FILTER_OPTIONS.categories.map((cat) => (
                    <label
                      key={cat.value}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.value}
                        checked={selectedCategory === cat.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-2">
                  {FILTER_OPTIONS.priceRanges.map((range) => (
                    <label
                      key={range.value}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={selectedPriceRange === range.value}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                        className="text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Age Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Age Range</h3>
                <div className="space-y-2">
                  {FILTER_OPTIONS.ageRanges.map((age) => (
                    <label
                      key={age.value}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <input
                        type="radio"
                        name="age"
                        value={age.value}
                        checked={selectedAgeRange === age.value}
                        onChange={(e) => setSelectedAgeRange(e.target.value)}
                        className="text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{age.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Badge Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Special Features</h3>
                <div className="flex flex-wrap gap-2">
                  {FILTER_OPTIONS.badges.map((badge) => (
                    <motion.button
                      key={badge.value}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleBadge(badge.value)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        selectedBadges.includes(badge.value)
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {badge.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort & Filter Bar */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-soft">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-primary-400 focus:outline-none"
                >
                  {FILTER_OPTIONS.sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Filter Button */}
              <Button
                variant="outline"
                size="sm"
                icon={SlidersHorizontal}
                onClick={() => setShowFilters(true)}
                className="lg:hidden"
              >
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-1 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Products */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-float overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Same filter content as desktop */}
              <div className="space-y-6">
                {/* Add all filter sections here */}
                <Button onClick={() => setShowFilters(false)} className="w-full">
                  Apply Filters
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Products;
