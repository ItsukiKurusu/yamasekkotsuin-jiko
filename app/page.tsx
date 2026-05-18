import Hero from "./components/sections/Hero";
import Worries from "./components/sections/Worries";
import FreeSection from "./components/sections/FreeSection";
import AccidentFlow from "./components/sections/AccidentFlow";
import Points from "./components/sections/Points";
import TreatmentFlow from "./components/sections/TreatmentFlow";
import CtaSection from "./components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Worries />
      <FreeSection />
      <AccidentFlow />
      <Points />
      <TreatmentFlow />
      <CtaSection />
    </>
  );
}
