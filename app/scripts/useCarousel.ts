import { useState, useRef, useEffect } from 'react';

// Custom hook for managing carousel logic
const useCarousel = (dataLength: number) => {
  const maxScrollWidth = useRef<number>(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const movePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const moveNext = () => {
    if (carousel.current && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isDisabled = (direction: 'prev' | 'next'): boolean => {
    if (direction === 'prev') return currentIndex <= 0;
    if (direction === 'next' && carousel.current) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
    }
    return false;
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carousel.current) {
      maxScrollWidth.current = carousel.current.scrollWidth - carousel.current.offsetWidth;
    }
  }, [dataLength]);

  return { carousel, currentIndex, movePrev, moveNext, isDisabled };
};

export default useCarousel;
