const WhyItWorksSection = () => {
  const reasons = [
    {
      emoji: "✅",
      text: "Criado a partir das melhores abordagens testadas e aprovadas nos blocos de todo o Brasil!",
    },
    {
      emoji: "✅",
      text: "Inspirado nas estratégias que mais funcionam na psicologia da conquista e na arte da sedução.",
    },
    {
      emoji: "✅",
      text: "Simples, prático e direto ao ponto: sem enrolação, apenas o que realmente dá resultado.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Por que <span className="text-gradient-carnival">funciona</span>?
            </h2>
          </div>

          {/* Reasons */}
          <div className="space-y-4 mb-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-carnival-green/20 hover:border-carnival-green/40 transition-colors"
              >
                <span className="text-2xl text-carnival-green flex-shrink-0">{reason.emoji}</span>
                <p className="text-lg text-foreground leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>

          {/* Highlight */}
          <div className="text-center p-6 rounded-xl bg-carnival-orange/10 border border-carnival-orange/30">
            <span className="text-3xl">💥</span>
            <p className="text-xl text-foreground mt-3">
              <span className="font-bold text-carnival-orange">Funciona para qualquer situação:</span>{" "}
              seja em bloquinhos, festas ou na rua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
