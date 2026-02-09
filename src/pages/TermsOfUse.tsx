
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                            <ArrowLeft className="w-4 h-4" />
                            Voltar ao início
                        </Button>
                    </Link>
                </div>

                <h1 className="font-display text-4xl mb-8 text-primary">Termos de Uso</h1>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>Última atualização: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">1. Aceitação dos Termos</h2>
                        <p>Ao acessar e usar este site, você aceita e concorda em estar vinculado aos termos e provisões deste acordo. Além disso, ao usar os serviços particulares deste site, você deve estar sujeito a todas as regras ou diretrizes publicadas aplicáveis a esses serviços. Qualquer participação neste serviço constituirá aceitação deste acordo. Se você não concordar em cumprir o acima exposto, por favor, não o utilize.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">2. Propriedade Intelectual</h2>
                        <p>Este site e seu conteúdo original, recursos e funcionalidades são de propriedade do Carnaval Conquistas e são protegidos por direitos autorais internacionais, marcas registradas, patentes, segredos comerciais e outras leis de propriedade intelectual ou direitos de propriedade.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">3. Uso do Conteúdo</h2>
                        <p>O conteúdo fornecido neste site e nos produtos digitais vendidos destina-se apenas a fins informativos e de entretenimento. Os resultados podem variar de pessoa para pessoa.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">4. Política de Reembolso</h2>
                        <p>Oferecemos uma garantia de 7 dias. Se você não estiver satisfeito com o produto, pode solicitar o reembolso total dentro deste prazo através dos nossos canais de atendimento.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">5. Encerramento</h2>
                        <p>Podemos encerrar seu acesso ao Site, sem causa ou aviso prévio, o que pode resultar na perda e destruição de todas as informações associadas a você.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
