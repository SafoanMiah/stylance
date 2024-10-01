"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import Lucide icons
import { CarouselItem } from '../constants/index'; // Make sure this path is correct
import useCarousel from '../scripts/useCarousel';
import Image from 'next/image';

const BrowseStyles = () => {
  const { carousel, movePrev, moveNext, isDisabled } = useCarousel(CarouselItem.length);

  return (
    <div className="carousel mx-auto bg-[#edd4bb]">
      <h2
    className="leading-8 font-bold pb-6 text-[#503c2e] text-center pt-4"
    style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 2.5rem)' }}>
        Browse Styles
      </h2>

      <div className="relative overflow-hidden">

        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-0 left-0 w-full h-full">

          {/* Previous Button */}
          <button
            onClick={movePrev}
            className="hover:bg-[#4f4035] hover:opacity-50 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}>
            <ChevronLeft className="h-12 w-20 -ml-5" />
            <span className="sr-only">Prev</span>
          </button>

          {/* Next Button */}
          <button
            onClick={moveNext}
            className="hover:bg-[#4f4035] hover:opacity-50 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}>
            <ChevronRight className="h-12 w-20 -ml-5" />
            <span className="sr-only">Next</span>
          </button>

        </div>

        {/* Carousel Container */}
        <div ref={carousel} className="carousel-container relative flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory">
          
          {CarouselItem.map((resource, index) => (
            <div key={index} className="carousel-item text-center w-64 h-64 snap-start">
              <a href={resource.link} className="h-full w-full aspect-square block relative">
                
                <Image
                  src={resource.imageUrl}
                  alt={resource.title}
                  layout="fill"
                  objectFit="cover" // Maintain aspect ratio
                  className="w-full aspect-square"/>

                <span className="absolute inset-0 bg-orange-800/20 flex items-center justify-center">
                  <h3 className="text-white text-xl">{resource.title}</h3>
                </span>

              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BrowseStyles;
