import { Link } from 'react-router-dom';
import { Baby, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { APP_NAME } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Shop': [
      { label: 'All Products', to: '/products' },
      { label: 'Categories', to: '/categories' },
      { label: 'Deals & Offers', to: '/deals' },
      { label: 'New Arrivals', to: '/new' },
    ],
    'Help': [
      { label: 'Customer Support', to: '/support' },
      { label: 'Shipping Info', to: '/shipping' },
      { label: 'Returns & Exchanges', to: '/returns' },
      { label: 'FAQs', to: '/faq' },
    ],
    'About': [
      { label: 'About Us', to: '/about' },
      { label: 'Our Story', to: '/story' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact Us', to: '/contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-primary-400 to-secondary-400 p-2 rounded-xl">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your trusted partner for premium baby products. We bring joy, comfort, and safety to your little ones.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-lg hover:bg-primary-100 transition-colors">
                <Facebook className="w-5 h-5 text-primary-500" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg hover:bg-primary-100 transition-colors">
                <Instagram className="w-5 h-5 text-primary-500" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg hover:bg-primary-100 transition-colors">
                <Twitter className="w-5 h-5 text-primary-500" />
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">
                <Phone className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-medium text-gray-900">1800-123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">
                <Mail className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-medium text-gray-900">support@babybliss.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">
                <MapPin className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Visit Us</p>
                <p className="font-medium text-gray-900">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-600 hover:text-primary-500">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary-500">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-600 hover:text-primary-500">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
