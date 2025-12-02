import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Baby, ShoppingBag, Heart, TrendingUp, Shield, Truck, Headphones } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import productsData from '../data/products.json';

const Home = () => {
  const featuredProducts = productsData.products.filter(p => p.bestseller).slice(0, 8);
  const categories = productsData.categories;

  const features = [
    { icon: Shield, title: 'Safe & Certified', desc: 'All products are safety certified' },
    { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹1,999' },
    { icon: Headphones, title: '24/7 Support', desc: 'Always here to help you' },
    { icon: Heart, title: 'Quality Promise', desc: 'Premium products guaranteed' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-mint-50 overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-4">
                🎉 New Arrival Collection
              </Badge>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Everything Your
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Little One </span>
                Needs
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover premium, safe, and certified baby products that bring comfort and joy to your parenting journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" icon={ShoppingBag}>
                    Shop Now
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button size="lg" variant="outline">
                    Browse Categories
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary-500">50+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-500">10K+</div>
                  <div className="text-sm text-gray-600">Happy Parents</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-mint-500">100%</div>
                  <div className="text-sm text-gray-600">Safe Products</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-float">
                <img
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800"
                  alt="Happy Baby"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-float"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50%</div>
                    <div className="text-sm text-gray-600">Mega Sale</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <Baby className="w-32 h-32 text-primary-500" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Heart className="w-24 h-24 text-secondary-500" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find exactly what you need for your little one</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/products?category=${category.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl text-center cursor-pointer shadow-soft hover:shadow-card transition-shadow"
                  >
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      {category.icon === 'Baby' && '👶'}
                      {category.icon === 'ShoppingCart' && '🛒'}
                      {category.icon === 'Home' && '🏠'}
                      {category.icon === 'Coffee' && '🍼'}
                      {category.icon === 'Shirt' && '👕'}
                      {category.icon === 'Sparkles' && '🧸'}
                      {category.icon === 'Droplet' && '🛁'}
                      {category.icon === 'Heart' && '💊'}
                    </div>
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-4xl font-display font-bold mb-2">Bestsellers</h2>
              <p className="text-gray-600 text-lg">Our most loved products by parents</p>
            </div>
            <Link to="/products">
              <Button variant="outline" icon={ArrowRight} iconPosition="right">
                View All
              </Button>
            </Link>
          </motion.div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of happy parents who trust BabyBliss for their baby's needs
            </p>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary-500 hover:bg-gray-100"
                icon={ShoppingBag}
              >
                Explore Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
