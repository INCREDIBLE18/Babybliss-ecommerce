import { Star, StarHalf } from 'lucide-react';

const Rating = ({ rating, reviews, showReviews = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-accent-400 text-accent-400" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 fill-accent-400 text-accent-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
      <span className="text-sm text-gray-600">
        {rating.toFixed(1)}
        {showReviews && reviews && (
          <span className="text-gray-400"> ({reviews})</span>
        )}
      </span>
    </div>
  );
};

export default Rating;
