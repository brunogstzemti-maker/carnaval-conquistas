const GuaranteeSection = () => {
    return (
        <section className="py-16 bg-card/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="p-8 md:p-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 relative">
                        {/* Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-primary-foreground font-bold rounded-full text-sm">
                            GARANTIA TOTAL
                        </div>

                        <div className="text-center mt-4">
                            <span className="text-6xl">🛡️</span>

                            <h3 className="font-display text-3xl md:text-4xl text-primary mt-6 mb-6">
                                Garantia Incondicional de 7 Dias
                            </h3>

                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                                Você tem tempo de usar no Carnaval e se não gostar, ou achar que não funciona,
                                nós devolveremos <span className="text-primary font-bold">100% do seu dinheiro</span> sem complicações.
                            </p>

                            <div className="inline-block p-6 rounded-lg bg-background/50 border border-primary/20">
                                <p className="text-xl font-semibold text-foreground mb-2">
                                    Isso significa que você não tem risco.
                                </p>
                                <p className="text-2xl font-display text-primary">
                                    Ou você ganha, ou você ganha.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuaranteeSection;
