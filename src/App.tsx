import gsap from "gsap";
import { Navbar } from "./components/app/navbar";
import { HeroSection } from "./components/sections/hero-section";
import { ProductSection } from "./components/sections/product-section";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductSection />
    </div>
  );
};
export default App;
