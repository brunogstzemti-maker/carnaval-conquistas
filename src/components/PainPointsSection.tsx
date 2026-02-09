const PainPointsSection = () => {
  const painPoints = [
    {
      emoji: "⛔",
      text: "Você vê aquela mulher incrível no bloco, mas não sabe o que dizer...",
    },
    {
      emoji: "⛔",
      text: 'Solta um "Oi, tudo bem?" e recebe um sorriso sem graça (ou pior, nada)...',
    },
    {
      emoji: "⛔",
      text: "Fica observando os outros caras levando as melhores garotas enquanto você só assiste...",
    },
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Já aconteceu com você?
            </h2>
          </div>

          {/* Pain Points */}
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-background/50 border border-destructive/20 hover:border-destructive/40 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">{point.emoji}</span>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="font-display text-5xl md:text-6xl text-primary mb-6">
              CHEGA DISSO!
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              O Carnaval é o momento perfeito para aumentar a sua lista de contatos e beijar{" "}
              <span className="text-primary font-bold">MUITO</span>. Mas se você não souber o que falar e como se destacar, pode acabar indo pra casa sozinho.
            </p>
          </div>

          {/* Good News */}
          <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30">
            <div className="text-left">
              <span className="text-4xl">📌</span>
              <h4 className="font-display text-3xl md:text-4xl text-primary mt-4 mb-4">
                A boa notícia?
              </h4>
              <p className="text-xl text-foreground">
                Agora você tem um <span className="text-primary font-bold">atalho</span> para aumentar suas chances de sucesso!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
