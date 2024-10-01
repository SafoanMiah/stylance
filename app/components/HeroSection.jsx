import Image from 'next/image';
import homeHero1 from '../assets/homeHero1.png';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#4d3e34] to-[#EAC8A5] flex flex-col md:flex-row">
            {/* Text Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <h1
                    className="text-5xl sm:text-5xl lg:text-7xl gradient-title text-container"
                    style={{ fontSize: 'clamp(2rem, 5vw + 1rem, 4rem)' }}
                >
                    Discover Your <br /> Style
                </h1>

                <button className="custom-button mt-4 mb-10 sm:mb-16 md:mb-4">
                    Get Started
                </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full md:h-full overflow-hidden mt-10 hidden md:block">
                <Image
                    src={homeHero1}
                    alt="Home Hero"
                    layout="responsive"
                    className="object-cover"
                />
            </div>
        </div>
    );
};


export default HeroSection;