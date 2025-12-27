import gsap from "gsap";
import { Navbar } from "./components/app/navbar";
import { HeroSection } from "./components/sections/hero-section";
import { ProductSection } from "./components/sections/product-section";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShowcaseSection } from "./components/sections/showcase-section";
import { PerformanceSection } from "./components/sections/performance-section";
import { FeaturesSection } from "./components/sections/features-section";
import { HighlightsSection } from "./components/sections/highlights-section";
import { Footer } from "./components/app/footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ProductSection />
        <ShowcaseSection />
        <PerformanceSection />
        <FeaturesSection />
        <HighlightsSection />
      </main>
      <Footer />
    </div>
  );
};
export default App;
