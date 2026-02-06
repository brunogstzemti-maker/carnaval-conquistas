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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnival-orange/20 border border-carnival-orange/40 mb-6">
              <span className="text-2xl">🔥</span>
              <span className="text-carnival-orange font-bold uppercase tracking-wider">
                Oferta Especial de Pré-Carnaval
              </span>
              <span className="text-2xl">🔥</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* First 100 */}
            <div className="p-8 rounded-3xl bg-card border-2 border-carnival-green shadow-glow-gold relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-carnival-green text-background text-xs font-bold rounded-full">
                MAIS POPULAR
              </div>

              <div className="text-center pt-4">
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                  Primeiros 100 compradores
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-display text-gradient-gold">R$17</span>
                </div>
                <p className="text-muted-foreground mt-2">Pagamento único</p>
              </div>

              <div className="mt-8">
                <Button variant="gold" size="xl" className="w-full text-lg">
                  GARANTIR MINHA VAGA 🎉
                </Button>
              </div>
            </div>

            {/* Next 100 */}
            <div className="p-8 rounded-3xl bg-card border border-border relative">
              <div className="text-center">
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                  Próximos 100 compradores
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-display text-foreground">R$27</span>
                </div>
                <p className="text-muted-foreground mt-2">Pagamento único</p>
                <p className="text-sm text-carnival-orange mt-2">
                  Depois o valor será de R$47
                </p>
              </div>

              <div className="mt-8">
                <Button variant="carnival" size="xl" className="w-full text-lg">
                  QUERO BEIJAR MUITO 💋
                </Button>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="p-8 rounded-2xl bg-card/50 border border-border">
            <p className="text-center text-muted-foreground mb-6">
              Estilo aprimorado com seleções exclusivas da coleção.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-carnival-green/20 flex items-center justify-center text-carnival-green text-sm">
                    ✓
                  </span>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
