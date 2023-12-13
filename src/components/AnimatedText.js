import { motion } from 'framer-motion';

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText = ({ text, el: Wrapper = "p", className }) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
        aria-hidden="true"
      >
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={defaultAnimations}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
