
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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

                <h1 className="font-display text-4xl mb-8 text-primary">Política de Privacidade</h1>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>Última atualização: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">1. Coleta de Informações</h2>
                        <p>Coletamos informações que você nos fornece diretamente quando realiza uma compra, cria uma conta ou entra em contato conosco. As informações podem incluir seu nome, endereço de e-mail, informações de pagamento e outros dados necessários para processar suas transações.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">2. Uso das Informações</h2>
                        <p>Usamos as informações coletadas para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Processar suas compras e entregar os produtos digitais;</li>
                            <li>Enviar confirmações de pedidos e atualizações;</li>
                            <li>Responder a seus comentários e perguntas;</li>
                            <li>Melhorar nossos serviços e desenvolver novos produtos.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">3. Proteção de Dados</h2>
                        <p>Implementamos medidas de segurança projetadas para proteger suas informações pessoais contra acesso, uso ou divulgação não autorizados. No entanto, nenhum método de transmissão pela Internet é 100% seguro.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">4. Cookies</h2>
                        <p>Utilizamos cookies para melhorar sua experiência em nosso site. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display text-foreground mb-4">5. Contato</h2>
                        <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através dos canais de suporte disponíveis no site.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
