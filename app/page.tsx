import BrowseStyles from "./components/BrowseStyles";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className='min-h-screen'>
      <div>
        <Navbar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div>
        <BrowseStyles />
      </div>
    </div>
  )
}