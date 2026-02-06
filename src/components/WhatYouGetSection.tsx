const WhatYouGetSection = () => {
  const items = [
    {
      emoji: "✔️",
      title: "Cantadas Engraçadas",
      description: "Para conquistar pelo riso e quebrar o gelo sem esforço.",
    },
    {
      emoji: "✔️",
      title: "Elogios Criativos",
      description: "Para marcar presença e impressionar sem parecer forçado.",
    },
    {
      emoji: "✔️",
      title: "Abordagens Contextuais",
      description: "Para adaptar ao momento e ser mais natural.",
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              O que você vai <span className="text-primary">receber</span>:
            </h2>
          </div>

          {/* Items Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover:scale-[1.02] text-center group"
              >
                <span className="text-4xl block mb-4">{item.emoji}</span>
                <h3 className="font-display text-2xl text-primary mb-3 group-hover:text-gradient-gold transition-all">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Bonus */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-carnival-purple/20 to-carnival-pink/20 border-2 border-carnival-purple/40 relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-carnival-purple text-foreground text-xs font-bold rounded-full">
              BÔNUS
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-5xl">🔓</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-carnival-purple mb-3">
                  Bônus Especial
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Liberação imediata de um dos nossos campeões de venda!{" "}
                  <span className="text-primary font-semibold">
                    O Protocolo para ter assunto infinito com qualquer mulher, em qualquer local a qualquer hora!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
