export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const formatDiscount = (originalPrice, currentPrice) => {
  if (!originalPrice || originalPrice <= currentPrice) return null;
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  return discount;
};

export const calculateAgeInMonths = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  return (today.getFullYear() - birth.getFullYear()) * 12 + 
         (today.getMonth() - birth.getMonth());
};

export const getAgeCategory = (ageInMonths) => {
  if (ageInMonths < 3) return '0-3 months';
  if (ageInMonths < 6) return '3-6 months';
  if (ageInMonths < 12) return '6-12 months';
  if (ageInMonths < 24) return '12-24 months';
  return '24+ months';
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
