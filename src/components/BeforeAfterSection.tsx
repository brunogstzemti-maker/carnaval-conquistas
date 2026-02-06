const BeforeAfterSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Esperar <span className="text-carnival-pink">Nunca</span> é a Melhor Opção
            </h2>
          </div>

          {/* Before/After Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 rounded-2xl bg-destructive/10 border border-destructive/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">👎</span>
                <h3 className="font-display text-3xl text-destructive">ANTES</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Você ficava sem saber o que dizer, via outras pessoas se divertindo e terminava a noite sem um único beijo.
              </p>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl bg-carnival-green/10 border border-carnival-green/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">👍</span>
                <h3 className="font-display text-3xl text-carnival-green">DEPOIS</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Você se torna um cara <span className="text-primary font-bold">confiante</span>, sabendo exatamente o que falar para abrir qualquer conversa e criar oportunidades de beijos sem parecer desesperado.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 rounded-xl bg-gradient-to-r from-carnival-orange/20 to-carnival-pink/20 border border-carnival-orange/40">
              <span className="text-3xl">💥</span>
              <p className="text-xl md:text-2xl font-display text-foreground mt-3">
                A escolha é sua:{" "}
                <span className="text-muted-foreground">ficar assistindo</span> ou finalmente{" "}
                <span className="text-gradient-carnival">APROVEITAR O CARNAVAL!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
