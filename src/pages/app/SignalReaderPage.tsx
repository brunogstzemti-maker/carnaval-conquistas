
import AppLayout from '@/components/app/AppLayout';
import { signalChecklist } from '@/data/appContent';
import { useState } from 'react';
import { Check, X, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SignalReaderPage = () => {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter(item => item !== id));
        } else {
            setCheckedItems([...checkedItems, id]);
        }
    };

    const calculateResult = () => {
        if (checkedItems.length === 0) return null;

        let score = 0;
        checkedItems.forEach(id => {
            const item = signalChecklist.find(i => i.id === id);
            if (item?.type === 'positive') score += 1;
            if (item?.type === 'negative') score -= 1;
        });

        if (score > 0) return { text: "Pode continuar! ✅", color: "bg-green-600", desc: "Os sinais são positivos." };
        if (score < 0) return { text: "Melhor sair com elegância 🛑", color: "bg-red-600", desc: "Ela não parece interessada agora." };
        return { text: "Sinais Mistos 🤔", color: "bg-yellow-600", desc: "Vá com calma e observe mais." };
    };

    const result = calculateResult();

    return (
        <AppLayout title="Leitor de Sinais" showBack>
            <div className="flex flex-col h-full gap-6">
                <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-center">
                    <h2 className="text-xl font-medium text-white">Ela está interessada?</h2>
                    <p className="text-neutral-400 text-sm mt-1">Marque o que você percebeu</p>
                </div>

                <div className="flex-1 space-y-3">
                    {signalChecklist.map((item) => {
                        const isChecked = checkedItems.includes(item.id);
                        const isPositive = item.type === 'positive';
                        return (
                            <div
                                key={item.id}
                                onClick={() => toggleItem(item.id)}
                                className={`
                  p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between
                  ${isChecked
                                        ? (isPositive ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50')
                                        : 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800'}
                `}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center border
                        ${isChecked
                                            ? (isPositive ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500')
                                            : 'border-neutral-600'}
                    `}>
                                        {isChecked && (isPositive ? <Check className="w-4 h-4 text-white" /> : <X className="w-4 h-4 text-white" />)}
                                    </div>
                                    <span className={`text-lg ${isChecked ? 'text-white font-medium' : 'text-neutral-300'}`}>
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Result Area */}
                <div className={`
            sticky bottom-4 transition-all duration-500 transform
            ${result ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}>
                    {result && (
                        <div className={`${result.color} p-6 rounded-2xl shadow-xl text-white text-center animate-in zoom-in slide-in-from-bottom duration-300`}>
                            <h3 className="text-2xl font-bold mb-1">{result.text}</h3>
                            <p className="opacity-90">{result.desc}</p>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="mt-4 bg-white/20 hover:bg-white/30 text-white w-full"
                                onClick={() => setCheckedItems([])}
                            >
                                <RefreshCw className="w-4 h-4 mr-2" /> Reiniciar
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
};

export default SignalReaderPage;
