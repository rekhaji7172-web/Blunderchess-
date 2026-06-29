import React, { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  value: number;
  duration?: number; // duration in ms
  formatter?: (val: number) => string;
}

export const CountUp: React.FC<CountUpProps> = ({ 
  value, 
  duration = 1200, 
  formatter = (val) => val.toLocaleString() 
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValueRef = useRef(value);

  useEffect(() => {
    const startValue = prevValueRef.current;
    const endValue = value;
    
    if (startValue === endValue) {
      setDisplayValue(endValue);
      return;
    }

    const startTime = performance.now();
    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Quadratic ease-out: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(startValue + (endValue - startValue) * easeProgress);
      
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(endValue);
        prevValueRef.current = endValue;
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return <span>{formatter(displayValue)}</span>;
};
