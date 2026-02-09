import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ProductSection from "@/components/ProductSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <CountdownTimer />
      <HeroSection />
      <PainPointsSection />
      <ProductSection />
      <GuaranteeSection />
      <WhyItWorksSection />
      <WhatYouGetSection />
      <BeforeAfterSection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
