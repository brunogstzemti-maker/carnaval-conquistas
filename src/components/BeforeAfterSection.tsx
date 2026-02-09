

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
            <div className="rounded-2xl overflow-hidden border border-destructive/30 shadow-lg group">
              <div className="relative">
                <img
                  src="/antes.jpg.png"
                  alt="Antes: Cara sozinho e tímido"
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-1 rounded-full font-bold text-sm shadow-md">
                  👎 ANTES
                </div>
              </div>
            </div>

            {/* After */}
            <div className="rounded-2xl overflow-hidden border border-primary/30 shadow-lg group">
              <div className="relative">
                <img
                  src="/depois.jpg.png"
                  alt="Depois: Cara confiante com mulheres"
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full font-bold text-sm shadow-md">
                  👍 DEPOIS
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40">
              <span className="text-3xl">💥</span>
              <p className="text-xl md:text-2xl font-display text-foreground mt-3">
                A escolha é sua:{" "}
                <span className="text-muted-foreground">ficar assistindo</span> ou finalmente{" "}
                <span className="text-primary">APROVEITAR O CARNAVAL!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
