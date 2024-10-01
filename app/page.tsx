import BrowseStyles from "./components/BrowseStyles";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="">

      <Navbar />
      <HeroSection />

      {/* Black Strip Divider */}
      <div className="bg-[#503c2e] h-5" />

      <BrowseStyles />
    </div>
  );
}