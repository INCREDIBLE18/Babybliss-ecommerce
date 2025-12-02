import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
  permission: 'default',
  isSupported: 'Notification' in window,
  subscription: null,
  
  setPermission: (permission) => set({ permission }),
  setSubscription: (subscription) => set({ subscription }),
  
  requestPermission: async () => {
    if (!('Notification' in window)) {
      return 'denied';
    }
    
    const permission = await Notification.requestPermission();
    set({ permission });
    return permission;
  },
  
  showNotification: (title, options = {}) => {
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        vibrate: [200, 100, 200],
        ...options,
      });
      
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      
      return notification;
    }
  },
}));
