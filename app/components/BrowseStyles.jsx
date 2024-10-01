import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust the import path as necessary

const BrowseStyles = () => {
  return (
    <div className="bg-[#e0e0d0] p-4">

      <h1 className="text-2xl font-bold mb-4">Browse Styles</h1>

      <Carousel defaultValue={2} className="mt-6 w-full">
        <CarouselContent className="bg-red-400 w-full h-60">
          {/* Add Carousel Items */}

          <div className='w-30 h-30 bg-white rouded-full p-4'></div>
          <div className='w-30 h-30 bg-white rouded-full p-4'></div>
          <div className='w-30 h-30 bg-white rouded-full p-4'></div>
          <div className='w-30 h-30 bg-white rouded-full p-4'></div>

        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
      </Carousel>
    </div>
  );
};

export default BrowseStyles;
