// Notification Test Script for BabyBliss
// Run this in the browser console to test notifications

console.log('🔔 BabyBliss Notification Test Starting...');

// Check if notifications are supported
if (!('Notification' in window)) {
  console.error('❌ Notifications not supported in this browser');
} else {
  console.log('✅ Notifications are supported');
  console.log('Current permission:', Notification.permission);
}

// Function to test notification
async function testNotification() {
  console.log('📱 Testing notification...');
  
  try {
    // Request permission
    let permission = Notification.permission;
    
    if (permission === 'default') {
      console.log('🔄 Requesting notification permission...');
      permission = await Notification.requestPermission();
      console.log('Permission result:', permission);
    }
    
    if (permission === 'granted') {
      console.log('✅ Permission granted, creating notification...');
      
      // Create test notification
      const notification = new Notification('🎉 BabyBliss Test', {
        body: 'If you can see this, notifications are working! 🍼',
        icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect width="64" height="64" fill="%23FF6B9D" rx="12"/%3E%3Ctext x="32" y="44" font-family="Arial" font-size="32" font-weight="bold" fill="white" text-anchor="middle"%3EBB%3C/text%3E%3C/svg%3E',
        tag: 'babybliss-test',
        requireInteraction: false,
        vibrate: [200, 100, 200]
      });
      
      // Add event listeners for debugging
      notification.onshow = () => {
        console.log('✅ Notification displayed successfully!');
      };
      
      notification.onclick = () => {
        console.log('🖱️ Notification clicked');
        notification.close();
      };
      
      notification.onerror = (error) => {
        console.error('❌ Notification error:', error);
      };
      
      // Auto-close after 5 seconds for testing
      setTimeout(() => {
        notification.close();
        console.log('🔄 Test notification closed');
      }, 5000);
      
      return notification;
      
    } else if (permission === 'denied') {
      console.error('❌ Notifications blocked. Enable them in browser settings.');
      console.log('💡 To enable notifications:');
      console.log('   Chrome: Click lock icon → Notifications → Allow');
      console.log('   Firefox: Click shield icon → Permissions → Notifications → Allow');
      console.log('   Edge: Click lock icon → Notifications → Allow');
    } else {
      console.warn('⚠️ Notification permission not determined');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Auto-run the test
testNotification();

// Also provide manual test function
window.testBabyBlissNotification = testNotification;

console.log('🚀 Test complete! If no notification appeared:');
console.log('1. Check if notifications are enabled for this site');
console.log('2. Run: testBabyBlissNotification() in console');
console.log('3. Check system notification settings');