export const notificationService = {
  async requestPermission() {
    if (!('Notification' in window)) {
      return 'denied';
    }

    if (Notification.permission === 'granted') {
      return 'granted';
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission;
    }

    return Notification.permission;
  },

  async showNotification(title, options = {}) {
    const permission = await this.requestPermission();

    if (permission === 'granted') {
      // Always use direct Notification API for better debugging
      const notification = new Notification(title, {
        icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect width="64" height="64" fill="%23FF6B9D" rx="12"/%3E%3Ctext x="32" y="44" font-family="Arial" font-size="32" font-weight="bold" fill="white" text-anchor="middle"%3EBB%3C/text%3E%3C/svg%3E',
        vibrate: [200, 100, 200],
        tag: 'babybliss-notification',
        requireInteraction: false,
        ...options,
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      notification.onshow = () => {
        // Notification shown successfully
      };

      notification.onerror = () => {
        // Notification error occurred
      };

      return notification;
    } else {
      throw new Error('Notification permission not granted');
    }
  },

  async sendDemoNotification() {
    const messages = [
      {
        title: '🎉 Welcome to BabyBliss!',
        body: 'Discover amazing deals on baby products. Shop now!',
      },
      {
        title: '🔥 Flash Sale Alert!',
        body: 'Up to 50% off on baby essentials. Limited time offer!',
      },
      {
        title: '🎁 New Arrivals',
        body: 'Check out our latest collection of organic baby products',
      },
      {
        title: '⭐ Special Offer',
        body: 'Free shipping on orders above ₹1,999. Shop now!',
      },
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    return await this.showNotification(randomMessage.title, {
      body: randomMessage.body,
      data: {
        url: window.location.origin,
      },
    });
  },
};
