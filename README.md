# 🍼 BabyBliss - E-Commerce PWA for Baby Products

A modern, feature-rich Progressive Web App (PWA) for baby products, inspired by FirstCry.com. Built with React, Vite, Tailwind CSS, and comprehensive PWA features including push notifications.

## ✨ Features

### 🎯 Core E-Commerce Features
- **Product Catalog**: 50+ baby products across 8 categories
- **Smart Filtering**: Category, price range, age range, and badge filters
- **Advanced Sorting**: By popularity, price, rating, and newest
- **Shopping Cart**: Full cart management with quantity controls
- **Wishlist**: Save favorite products for later
- **Responsive Design**: Mobile-first, tablet, and desktop optimized

### 📱 PWA Features
- **Offline Support**: Browse products even without internet
- **Service Worker**: Intelligent caching strategies
- **Installable**: Add to home screen on mobile/desktop
- **App-Like Experience**: Standalone mode
- **Fast Loading**: Optimized bundle splitting

### 🔔 Push Notifications ⭐
- **Demo Button**: "Send Notification" button in header (Assessment requirement)
- **Permission Management**: Smart permission request flow
- **Service Worker Integration**: Background notification support
- **Multiple Notification Types**: Sales, offers, back-in-stock alerts

### 🎨 Unique Baby-Focused Features
- **Age-Based Filtering**: Products by baby age (0-3mo, 3-6mo, etc.)
- **Safety Badges**: Organic, BPA-Free, Safety Certified labels
- **8 Categories**: Baby Care, Gear, Nursery, Feeding, Clothing, Toys, Bath, Health
- **Special Features Filter**: Organic, Eco-Friendly, Pediatrician Recommended

### 🎭 Animations & Interactions
- **Framer Motion**: Smooth page transitions
- **Hover Effects**: Product card lifts, button scales
- **Add to Cart Animation**: Product zooms to cart icon
- **Scroll Animations**: Fade-in effects
- **Loading States**: Custom animated loaders

## 🚀 Getting Started

### Start Development Server
```bash
npm run dev
```
Open http://localhost:5173

### Build for Production
```bash
npm run build
npm run preview
```

## 🔔 Testing Push Notifications

1. Click **"Enable Notifications"** button in header
2. Grant permission when prompted
3. Click **"Send Notification"** to receive demo notification
4. Green dot indicator shows notifications are enabled

**Works in**: Chrome, Firefox, Edge (Desktop & Android), Safari (macOS/iOS 16.4+)

## 📱 PWA Installation

**Desktop**: Look for install icon (⊕) in address bar  
**Mobile**: Menu → "Add to Home Screen"

**Test Offline**: DevTools → Network → Offline checkbox ✅

## 🎨 Tech Stack

- React 18.3 + React Router
- Vite 7.2 with SWC
- Tailwind CSS 3.4
- Framer Motion
- Zustand (State Management)
- Lucide React (Icons)
- Custom Service Worker

## 📂 Project Structure

```
src/
├── components/      # UI components (Button, Card, Badge, etc.)
├── pages/          # Home, Products, Cart, Wishlist
├── store/          # Zustand stores (cart, wishlist, notifications)
├── services/       # Notification service
├── data/           # products.json (50+ products)
└── utils/          # Helper functions

public/
├── icons/          # PWA icons (72x72, 192x192, 512x512)
├── manifest.json   # PWA manifest
├── sw.js          # Service worker
└── offline.html   # Offline page
```

## 🌟 Key Highlights

✅ **Responsiveness**: Mobile-first (320px+), Tablet, Desktop  
✅ **Clean Code**: Modular components, reusable utilities  
✅ **PWA**: Offline support, installable, service worker  
✅ **Push Notifications**: Demo button + permission flow  
✅ **Animations**: Framer Motion throughout  
✅ **50+ Products**: Realistic baby product data  
✅ **8 Categories**: Comprehensive product range  
✅ **Advanced Filters**: Category, price, age, badges  
✅ **Cart & Wishlist**: Full e-commerce functionality  
✅ **Unique Features**: Age-based recommendations, safety badges

## 📊 Product Categories (50+ Products)

1. Baby Care (17): Diapers, wipes, lotions, powders
2. Baby Gear (8): Strollers, car seats, carriers
3. Nursery (7): Cribs, monitors, furniture
4. Feeding (8): Bottles, high chairs, food makers
5. Clothing (6): Rompers, sleepwear
6. Toys (6): Educational toys, plush toys
7. Bath Time (5): Tubs, towels, bath toys
8. Health & Safety (6): Thermometers, first aid

## 🎁 Bonus Features

- Baby Age Calculator
- Smart Recommendations
- Product Comparison
- Stock Indicators
- Free Shipping Progress Bar
- Trust Badges
- Custom Loading States
- Gradient Backgrounds

## 📝 Assessment Compliance

✅ PWA Setup Complete  
✅ Push Notifications with Demo Button  
✅ Fully Responsive (Mobile, Tablet, Desktop)  
✅ Clean, Modular Code  
✅ Unique Features & Interactions  
✅ Smooth Animations Throughout  
✅ Baby Products E-Commerce Theme

---

**Built with ❤️ for BabyBliss Demo**  
🎉 All requirements implemented and tested!
