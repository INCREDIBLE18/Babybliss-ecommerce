import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Bell, BellRing } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

const NotificationButton = () => {
  const isSupported = typeof window !== 'undefined' && 'Notification' in window;
  const canUsePortal = typeof document !== 'undefined';
  const [permission, setPermission] = useState('default');
  const [isLoading, setIsLoading] = useState(false);
  const [inlineToast, setInlineToast] = useState(null);
  const toastTimeout = useRef();

  useEffect(() => {
    if (isSupported) {
      setPermission(window.Notification.permission);
    }
  }, [isSupported]);

  useEffect(() => {
    return () => {
      if (toastTimeout.current) {
        clearTimeout(toastTimeout.current);
      }
    };
  }, []);

  const showNativeNotification = async (title, options) => {
    // Try service worker first for better reliability
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        await registration.showNotification(title, options);
        return true;
      }
    } catch {
      // Service worker notification failed, falling back
    }

    const notification = new window.Notification(title, options);
    notification.onclick = () => {
      window.focus();
      notification.close();
    };
    return true;
  };

  const handleSendNotification = async () => {
    setIsLoading(true);
    
    try {
      // Check if notifications are supported
      if (!isSupported) {
        alert('❌ This browser does not support notifications.');
        return;
      }
      
      let perm = window.Notification.permission;
      
      // Request permission if needed
      if (perm === 'default') {
        perm = await window.Notification.requestPermission();
        setPermission(perm);
      }
      
      if (perm === 'granted') {
        // Random demo messages
        const messages = [
          { title: '🎉 BabyBliss Alert!', body: 'Flash Sale! 50% off on baby essentials! 🛍️' },
          { title: '🍼 New Arrivals!', body: 'Check out our latest organic baby products! ✨' },
          { title: '💝 Special Offer!', body: 'Free shipping on orders above ₹1,999! 🚚' },
          { title: '⭐ BabyBliss News!', body: 'Your notification system is working perfectly! 🎊' }
        ];
        
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        
        const notificationOptions = {
          body: randomMsg.body,
          icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect width="64" height="64" fill="%23FF6B9D" rx="12"/%3E%3Ctext x="32" y="44" font-family="Arial" font-size="32" font-weight="bold" fill="white" text-anchor="middle"%3EBB%3C/text%3E%3C/svg%3E',
          tag: 'babybliss-notification',
          requireInteraction: false,
          vibrate: [200, 100, 200]
        };

        await showNativeNotification(randomMsg.title, notificationOptions);

        setInlineToast(randomMsg);
        if (toastTimeout.current) clearTimeout(toastTimeout.current);
        toastTimeout.current = setTimeout(() => setInlineToast(null), 3500);
        
      } else if (perm === 'denied') {
        alert('❌ Notifications are blocked. Please:\n\n1. Click the lock/info icon in address bar\n2. Allow notifications for this site\n3. Refresh the page and try again');
      } else {
        alert('⚠️ Please allow notifications when prompted and try again.');
      }
      
    } catch (error) {
      alert(`❌ Error: ${error.message}\n\nTry refreshing the page and allowing notifications.`);
    } finally {
      setIsLoading(false);
    }
  };

  const toastPortal = canUsePortal
    ? createPortal(
        <AnimatePresence>
          {inlineToast && (
            <motion.div
              initial={{ opacity: 0, x: 50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-6 right-6 z-[9999] w-72 rounded-2xl bg-white shadow-2xl border border-green-100 p-4 flex gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg">🔔</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{inlineToast.title || 'Notification Sent'}</p>
                <p className="text-xs text-gray-500 mt-1">{inlineToast.body || 'Check your system tray for the latest BabyBliss alert.'}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={handleSendNotification}
          variant="secondary"
          size="sm"
          icon={permission === 'granted' ? BellRing : Bell}
          isLoading={isLoading}
          className="relative"
        >
          {permission === 'granted' ? 'Send Notification' : 'Enable Notifications'}
          {permission === 'granted' && (
            <motion.span
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          )}
        </Button>
      </motion.div>
      {toastPortal}
    </>
  );
};

export default NotificationButton;
