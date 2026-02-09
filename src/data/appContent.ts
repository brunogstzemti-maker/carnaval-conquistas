
export interface Phrase {
    id: string;
    text: string;
}

export interface Category {
    id: string;
    title: string;
    phrases: Phrase[];
    color: string;
}

export interface ContextContent {
    id: string;
    title: string;
    icon: string; // Lucide icon name or emoji
    description: string;
    categories: Category[];
    tips?: string;
    color: string;
}

export const appContent: Record<string, ContextContent> = {
    bloco: {
        id: "bloco",
        title: "Bloco de Carnaval",
        icon: "🎭",
        description: "Abordagens para bloco",
        color: "from-carnival-orange to-carnival-pink",
        categories: [
            {
                id: "leve",
                title: "Chegada Leve",
                color: "bg-carnival-teal",
                phrases: [
                    { id: "b_l_1", text: "Oi, promessa rápida: só vim te conhecer." },
                    { id: "b_l_2", text: "Esse sorriso aí é fantasia ou é seu mesmo?" },
                    { id: "b_l_3", text: "Com licença, não podia deixar o bloco passar sem falar um oi." }
                ]
            },
            {
                id: "divertida",
                title: "Chegada Divertida",
                color: "bg-carnival-purple",
                phrases: [
                    { id: "b_d_1", text: "Você viu minha turma? Eles devem estar procurando a pessoa mais bonita do bloco (você)." },
                    { id: "b_d_2", text: "Nota 10 no quesito harmonia, hein?" },
                    { id: "b_d_3", text: "Se beleza fosse confete, você seria o caminhão inteiro." }
                ]
            },
            {
                id: "direta",
                title: "Chegada Direta",
                color: "bg-carnival-pink",
                phrases: [
                    { id: "b_dir_1", text: "Te achei incrível e precisei vir falar com você." },
                    { id: "b_dir_2", text: "O bloco tá cheio, mas só vi você." },
                    { id: "b_dir_3", text: "Posso te acompanhar nesse trecho?" }
                ]
            }
        ]
    },
    festa: {
        id: "festa",
        title: "Festa / Bar",
        icon: "🍻",
        description: "Abordagem em festa ou bar",
        tips: "Postura aberta, sorriso leve e contato visual.",
        color: "from-purple-600 to-blue-600",
        categories: [
            {
                id: "casual",
                title: "Abordagem Casual",
                color: "bg-blue-500",
                phrases: [
                    { id: "f_c_1", text: "Esse lugar tá incrível, né? Você vem sempre aqui?" },
                    { id: "f_c_2", text: "O que você tá achando da música?" },
                    { id: "f_c_3", text: "Sabia que você tem cara de quem sabe escolher os melhores drinks?" }
                ]
            },
            {
                id: "confiante",
                title: "Abordagem Confiante",
                color: "bg-indigo-500",
                phrases: [
                    { id: "f_conf_1", text: "Te vi de longe e decidi que valia a pena o risco de vir falar oi." },
                    { id: "f_conf_2", text: "Não sou muito de abordar, mas com você abri uma exceção." },
                    { id: "f_conf_3", text: "Oi. Só queria dizer que você tá muito estilosa." }
                ]
            },
            {
                id: "curiosa",
                title: "Abordagem Curiosa",
                color: "bg-violet-500",
                phrases: [
                    { id: "f_cur_1", text: "Você tem um vibe ótima, o que você faz pra se divertir assim?" },
                    { id: "f_cur_2", text: "Aposto que você é a pessoa mais animada do seu grupo." },
                    { id: "f_cur_3", text: "Tô tentando adivinhar o que você tá bebendo, parece bom." }
                ]
            }
        ]
    },
    rua: {
        id: "rua",
        title: "Na Rua",
        icon: "🚶‍♂️",
        description: "Foco em respeito e naturalidade",
        tips: "Se ela não demonstrar interesse, saia com classe.",
        color: "from-emerald-500 to-teal-500",
        categories: [
            {
                id: "educada",
                title: "Abordagem Educada",
                color: "bg-emerald-500",
                phrases: [
                    { id: "r_e_1", text: "Com licença, não quero atrapalhar, mas te achei muito elegante." },
                    { id: "r_e_2", text: "Oi, desculpa te parar assim, mas precisava dizer que seu estilo é incrível." },
                    { id: "r_e_3", text: "Rapidinho: só queria te elogiar e desejar um bom dia." }
                ]
            },
            {
                id: "rapida",
                title: "Abordagem Rápida",
                color: "bg-teal-500",
                phrases: [
                    { id: "r_r_1", text: "Oi! Passou rápido, mas chamou minha atenção." },
                    { id: "r_r_2", text: "Só vim dizer oi e deixar meu número, se você quiser. (Entregue papel/celular)" },
                    { id: "r_r_3", text: "Você é daqui mesmo? Parece conhecer bem a cidade." }
                ]
            },
            {
                id: "situacional",
                title: "Situacional",
                color: "bg-cyan-500",
                phrases: [
                    { id: "r_s_1", text: "Essa fila tá gigante, né? Pelo menos a companhia por perto é boa." },
                    { id: "r_s_2", text: "Esse cachorro é seu? Muito bonito!" },
                    { id: "r_s_3", text: "Você sabe onde fica [Lugar Próximo]? Tô meio perdido." }
                ]
            }
        ]
    },
    conversando: {
        id: "conversando",
        title: "Já estou conversando",
        icon: "💬",
        description: "Manter o papo fluindo",
        color: "from-pink-500 to-rose-500",
        categories: [
            {
                id: "continuar",
                title: "Como continuar",
                color: "bg-pink-500",
                phrases: [
                    { id: "c_c_1", text: "E o que você gosta de fazer quando não tá [Contexto atual]?" },
                    { id: "c_c_2", text: "Me conta uma coisa que ninguém diz sobre você logo de cara." },
                    { id: "c_c_3", text: "Qual foi a melhor viagem que você já fez?" }
                ]
            },
            {
                id: "perguntas",
                title: "Perguntas Leves",
                color: "bg-rose-500",
                phrases: [
                    { id: "c_p_1", text: "Você prefere praia ou serra?" },
                    { id: "c_p_2", text: "Qual a música que não pode faltar na sua playlist?" },
                    { id: "c_p_3", text: "Se pudesse estar em qualquer lugar agora, onde estaria?" }
                ]
            },
            {
                id: "contexto",
                title: "Puxar pelo contexto",
                color: "bg-red-400",
                phrases: [
                    { id: "c_ctx_1", text: "O que você tá achando dessa festa comparada as outras?" },
                    { id: "c_ctx_2", text: "Você costuma vir muito aqui?" },
                    { id: "c_ctx_3", text: "Olha aquilo ali (apontar algo engraçado/curioso)." }
                ]
            }
        ]
    }
};

export const sosContent = {
    title: "Respira. Você não travou.",
    posture: "Estufe o peito levemente, relaxe os ombros e sorria.",
    safePhrase: "Oi, posso roubar 30 segundos?",
    action: "Sorria, olhe nos olhos e fale devagar.",
};

export const signalChecklist = [
    { id: "s1", label: "Ela está sorrindo?", type: "positive" },
    { id: "s2", label: "Ela faz perguntas de volta?", type: "positive" },
    { id: "s3", label: "Ela mantém contato visual?", type: "positive" },
    { id: "s4", label: "Ela tocou em você/seu braço?", type: "positive" },
    { id: "s5", label: "Corpo virado para outro lado?", type: "negative" },
    { id: "s6", label: "Respostas curtas (sim/não)?", type: "negative" },
    { id: "s7", label: "Olhando muito o celular/relógio?", type: "negative" },
    { id: "s8", label: "Deu passos para trás?", type: "negative" }
];
