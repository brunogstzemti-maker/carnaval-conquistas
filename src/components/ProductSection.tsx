const ProductSection = () => {
  const features = [
    {
      emoji: "🔹",
      text: "50 cantadas prontas para já chegar chegando e desenrolar logo de cara",
    },
    {
      emoji: "🔹",
      text: "Divididas em categorias para facilitar ainda mais a identificação do contexto certo",
    },
    {
      emoji: "🔹",
      text: "Feitas para quebrar o gelo de forma natural e divertida",
    },
    {
      emoji: "🔹",
      text: "Baseadas no que REALMENTE funciona na folia",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-carnival-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-carnival-pink/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Product Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-5xl">🎭</span>
              <h2 className="font-display text-4xl md:text-6xl text-gradient-gold">
                50 Abordagens Infalíveis
              </h2>
              <span className="text-5xl">🎭</span>
            </div>
            <p className="font-display text-3xl md:text-4xl text-carnival-pink">
              para Beijar no Carnaval
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-[1.02] hover:shadow-glow-gold"
              >
                <span className="text-2xl text-primary">{feature.emoji}</span>
                <p className="text-lg text-foreground">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-carnival-pink/10 to-primary/10 border border-primary/30">
            <span className="text-4xl">💡</span>
            <p className="text-2xl md:text-3xl font-display text-foreground mt-4">
              É só <span className="text-primary">"copiar"</span>,{" "}
              <span className="text-carnival-pink">"colar"</span> e{" "}
              <span className="text-carnival-green">curtir o Carnaval como nunca</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
