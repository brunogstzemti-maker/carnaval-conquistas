import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const benefits = [
    "Acesso imediato sem burocracia",
    "Material prático e aplicável",
    "Garantia incondicional de 15 dias",
    "Bônus para ter assunto infinito com qualquer mulher",
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-carnival-gold/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnival-orange/20 border border-carnival-orange/40 mb-6">
              <span className="text-2xl">🔥</span>
              <span className="text-carnival-orange font-bold uppercase tracking-wider">
                Oferta Especial de Pré-Carnaval
              </span>
              <span className="text-2xl">🔥</span>
            </div>
          </div>

          {/* Single Pricing Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-card border-2 border-carnival-green shadow-glow-gold relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-carnival-gold via-carnival-pink to-carnival-gold animate-liquid-slide" />
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-carnival-green text-background text-xs font-bold rounded-full">
              OFERTA LIMITADA
            </div>

            <div className="text-center pt-4 mb-8">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                Primeiros 100 compradores
              </p>
              
              {/* Price Comparison */}
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-muted-foreground line-through">R$47</span>
                <span className="text-3xl text-carnival-orange line-through">R$27</span>
              </div>
              
              {/* Main Price */}
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-display text-gradient-gold">R$17</span>
              </div>
              <p className="text-muted-foreground mt-2">Pagamento único</p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Estilo aprimorado com seleções exclusivas da coleção.
              </p>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-carnival-green/20 flex items-center justify-center text-carnival-green text-sm flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="gold" size="xl" className="w-full text-lg animate-cta-pulse">
              GARANTIR MINHA VAGA 🎉
            </Button>

            {/* Urgency Text */}
            <p className="text-center text-sm text-carnival-orange mt-4">
              ⚡ Depois dos primeiros 100, o valor será de R$47
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
