
import AppLayout from '@/components/app/AppLayout';
import { sosContent } from '@/data/appContent';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const SOSPage = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(sosContent.safePhrase);
        toast.success('Frase copiada!');
    };

    return (
        <AppLayout title="Modo Socorro" showBack className="bg-neutral-950">
            <div className="flex flex-col items-center justify-center h-full min-h-[70vh] text-center gap-8">

                <div className="space-y-2 animate-in slide-in-from-bottom-5 duration-700">
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        {sosContent.title}
                    </h2>
                    <div className="h-1 w-20 bg-red-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-6 w-full">
                    <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-2">Postura</h3>
                        <p className="text-xl text-white font-medium">{sosContent.posture}</p>
                    </div>

                    <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-2xl shadow-xl shadow-red-900/20 transform hover:scale-[1.02] transition-all">
                        <h3 className="text-sm uppercase tracking-widest text-white/70 mb-3">Diga isso agora</h3>
                        <p className="text-2xl font-bold text-white mb-6">"{sosContent.safePhrase}"</p>
                        <Button
                            variant="secondary"
                            className="w-full bg-white text-red-700 hover:bg-neutral-100 font-bold border-none"
                            onClick={copyToClipboard}
                        >
                            <Copy className="mr-2 h-4 w-4" />
                            COPIAR FRASE
                        </Button>
                    </div>

                    <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-2">Ação</h3>
                        <p className="text-xl text-white font-medium">{sosContent.action}</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default SOSPage;
