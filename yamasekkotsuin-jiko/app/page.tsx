import Hero from "./components/sections/Hero";
import Worries from "./components/sections/Worries";
import DirectorSection from "./components/sections/DirectorSection";
import FreeSection from "./components/sections/FreeSection";
import AccidentFlow from "./components/sections/AccidentFlow";
import Points from "./components/sections/Points";
import TreatmentFlow from "./components/sections/TreatmentFlow";
import GallerySection from "./components/sections/GallerySection";
import CtaSection from "./components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Worries />
      <DirectorSection />
      <FreeSection />
      <AccidentFlow />
      <Points />
      <TreatmentFlow />
      <GallerySection />
      <CtaSection />
    </>
  );
}
