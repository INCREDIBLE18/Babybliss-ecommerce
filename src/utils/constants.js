export const APP_NAME = 'BabyBliss';
export const APP_TAGLINE = 'Your One-Stop Shop for Baby Essentials';

export const FILTER_OPTIONS = {
  categories: [
    { value: 'all', label: 'All Categories' },
    { value: 'baby-care', label: 'Baby Care' },
    { value: 'baby-gear', label: 'Baby Gear' },
    { value: 'nursery', label: 'Nursery' },
    { value: 'feeding', label: 'Feeding' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'toys', label: 'Toys' },
    { value: 'bath-time', label: 'Bath Time' },
    { value: 'health-safety', label: 'Health & Safety' },
  ],
  priceRanges: [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: 'Under ₹1,000' },
    { value: '1000-3000', label: '₹1,000 - ₹3,000' },
    { value: '3000-5000', label: '₹3,000 - ₹5,000' },
    { value: '5000-10000', label: '₹5,000 - ₹10,000' },
    { value: '10000+', label: 'Above ₹10,000' },
  ],
  ageRanges: [
    { value: 'all', label: 'All Ages' },
    { value: '0-3 months', label: '0-3 Months' },
    { value: '3-6 months', label: '3-6 Months' },
    { value: '6-12 months', label: '6-12 Months' },
    { value: '12-24 months', label: '12-24 Months' },
    { value: '24+ months', label: '24+ Months' },
  ],
  sortOptions: [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
  ],
  badges: [
    { value: 'Organic', label: 'Organic', color: '#98D8C8' },
    { value: 'BPA-Free', label: 'BPA-Free', color: '#89CFF0' },
    { value: 'Eco-Friendly', label: 'Eco-Friendly', color: '#98D8C8' },
    { value: 'Safety Certified', label: 'Safety Certified', color: '#FFD700' },
    { value: 'Pediatrician Recommended', label: 'Pediatrician Recommended', color: '#FF6B9D' },
  ],
};

export const NOTIFICATION_MESSAGES = {
  addToCart: (productName) => ({
    title: '🎉 Added to Cart!',
    body: `${productName} has been added to your cart`,
    icon: '/icons/icon-192x192.png',
  }),
  orderPlaced: {
    title: '✅ Order Placed Successfully!',
    body: 'Your order has been confirmed. Track your delivery in the app.',
    icon: '/icons/icon-192x192.png',
  },
  flashSale: {
    title: '🔥 Flash Sale Alert!',
    body: 'Up to 50% off on baby essentials. Shop now!',
    icon: '/icons/icon-192x192.png',
  },
  backInStock: (productName) => ({
    title: '🎁 Back in Stock!',
    body: `${productName} is now available. Order before it's gone!`,
    icon: '/icons/icon-192x192.png',
  }),
};
