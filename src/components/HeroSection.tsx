import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-carnival.jpg";

const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Confetti Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full opacity-60 animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#FFD700', '#FF1493', '#00CED1', '#FF6B35', '#9B59B6'][i % 5],
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnival-pink/20 border border-carnival-pink/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-carnival-gold/20 via-carnival-pink/20 to-carnival-gold/20 animate-liquid-slide" />
            <span className="text-2xl relative z-10">🎭</span>
            <span className="text-carnival-pink font-semibold text-sm uppercase tracking-wider relative z-10">
              Oferta Especial de Pré-Carnaval
            </span>
            <span className="text-2xl relative z-10">🎭</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
            <span className="text-gradient-gold">BEIJE A MULHER</span>
            <br />
            <span className="text-foreground">QUE QUISER</span>
            <br />
            <span className="text-carnival-pink">NESTE CARNAVAL</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Quer pegar várias neste Carnaval?{" "}
            <span className="text-primary font-semibold">
              As 50 melhores abordagens para pegar qualquer mulher!!
            </span>
          </p>

          {/* Urgency */}
          <div className="flex items-center justify-center gap-2 text-carnival-orange font-semibold">
            <span className="text-2xl">⚡</span>
            <span>Não espere o carnaval acabar para ter acesso!</span>
            <span className="text-2xl">⚡</span>
          </div>
          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="gold" 
              size="xl" 
              onClick={scrollToPrice}
              className="text-xl px-12 animate-cta-pulse"
            >
              QUERO BEIJAR MUITO! 💋
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-carnival-green">✓</span>
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-carnival-green">✓</span>
              <span>Garantia de 15 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-carnival-green">✓</span>
              <span>Bônus Exclusivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
