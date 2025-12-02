import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)' } : {}}
      transition={{ duration: 0.2 }}
      className={cn(
        'bg-white rounded-2xl shadow-card overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
