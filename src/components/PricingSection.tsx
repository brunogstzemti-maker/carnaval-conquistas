import { Button } from "@/components/ui/button";

const PricingSection = () => {
    const benefits = [
        "Acesso imediato sem burocracia",
        "Material prático e aplicável",
        "Garantia incondicional de 7 dias",
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
                    <div className="p-8 md:p-10 rounded-lg bg-card border-2 border-black shadow-[0_0_40px_hsl(var(--primary)/0.5)] relative">

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg z-10">
                            OFERTA LIMITADA
                        </div>

                        <div className="text-center pt-4 mb-8">
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <span className="text-2xl text-muted-foreground line-through">R$29,90</span>
                            </div>

                            {/* Main Price */}
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-6xl md:text-7xl font-display text-gradient-gold [-webkit-text-stroke:2px_black]">R$19,90</span>
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
                        <a href="https://checkout.ofertapremiumsite.com.br/VCCL1O8SCRQL" target="_blank" rel="noopener noreferrer" className="block w-full">
                            <Button variant="default" size="xl" className="w-full text-lg animate-cta-pulse font-bold">
                                Garantir Minhas Abordagens
                            </Button>
                        </a>

                        {/* Urgency Text */}
                        <p className="text-center text-sm text-white mt-4">
                            ⚡ Acesso imediato após o pagamento
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
