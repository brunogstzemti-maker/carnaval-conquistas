
import { appContent } from '@/data/appContent';
import AppLayout from '@/components/app/AppLayout';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Eye, Heart } from 'lucide-react';

const AppHome = () => {
    const navigate = useNavigate();

    return (
        <AppLayout title="Aborda.AI" showBack={false}>
            <div className="flex flex-col gap-6">
                <section className="text-center py-4">
                    <h2 className="text-2xl font-bold text-white mb-2">O que você quer fazer agora?</h2>
                    <p className="text-neutral-400">Escolha o contexto para receber as melhores dicas.</p>
                </section>

                <div className="grid gap-4">
                    {/* Main Context Buttons */}
                    {Object.values(appContent).map((context) => (
                        <Card
                            key={context.id}
                            onClick={() => navigate(`/app/context/${context.id}`)}
                            className={`p-6 cursor-pointer hover:scale-[1.02] transition-transform border-none bg-gradient-to-r ${context.color} text-white shadow-lg`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-4xl">{context.icon}</span>
                                <div>
                                    <h3 className="text-xl font-bold">{context.title}</h3>
                                    <p className="text-white/80 text-sm">{context.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <section className="grid grid-cols-2 gap-4 mt-2">

                    {/* SOS Button */}
                    <Card
                        onClick={() => navigate('/app/sos')}
                        className="p-4 cursor-pointer hover:bg-red-900/40 bg-red-950/20 border-red-900/50 flex flex-col items-center justify-center gap-2 text-center"
                    >
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                        <span className="font-bold text-red-400">Travei (SOS)</span>
                    </Card>

                    {/* Signal Reader Button */}
                    <Card
                        onClick={() => navigate('/app/leitor-sinais')}
                        className="p-4 cursor-pointer hover:bg-blue-900/40 bg-blue-950/20 border-blue-900/50 flex flex-col items-center justify-center gap-2 text-center"
                    >
                        <Eye className="w-8 h-8 text-blue-500" />
                        <span className="font-bold text-blue-400">Leitor de Sinais</span>
                    </Card>
                </section>

                {/* Favorites Link (redundant if in header but good for accessibility) */}
                <Card
                    onClick={() => navigate('/app/favoritos')}
                    className="p-4 cursor-pointer hover:bg-neutral-800 bg-neutral-900 border-neutral-800 flex items-center justify-center gap-3"
                >
                    <Heart className="w-5 h-5 text-carnival-pink" />
                    <span className="font-medium text-neutral-300">Meus Favoritos</span>
                </Card>
            </div>
        </AppLayout>
    );
};

export default AppHome;
