
import { useParams, Navigate } from 'react-router-dom';
import { appContent, Phrase } from '@/data/appContent';
import AppLayout from '@/components/app/AppLayout';
import { Button } from '@/components/ui/button';
import { Copy, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const ContextPage = () => {
    const { id } = useParams<{ id: string }>();
    const content = id ? appContent[id] : null;

    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('aborda_favorites');
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, []);

    const toggleFavorite = (phrase: Phrase) => {
        let newFavs;
        if (favorites.includes(phrase.id)) {
            newFavs = favorites.filter(fid => fid !== phrase.id);
            toast.info('Removido dos favoritos');
        } else {
            newFavs = [...favorites, phrase.id];
            toast.success('Adicionado aos favoritos');
        }
        setFavorites(newFavs);
        localStorage.setItem('aborda_favorites', JSON.stringify(newFavs));
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success('Frase copiada!');
    };

    if (!content) {
        return <Navigate to="/app" />;
    }

    return (
        <AppLayout title={content.title} showBack>
            <div className="flex flex-col gap-6">
                {/* Header/Tips */}
                <div className={`p-4 rounded-xl bg-gradient-to-r ${content.color} text-white shadow-lg`}>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{content.icon}</span>
                        <h2 className="text-xl font-bold">{content.description}</h2>
                    </div>
                    {content.tips && (
                        <div className="mt-3 bg-black/20 p-3 rounded-lg text-sm backdrop-blur-sm">
                            <strong>💡 Dica:</strong> {content.tips}
                        </div>
                    )}
                </div>

                {/* Categories */}
                <div className="space-y-6">
                    {content.categories.map((category) => (
                        <section key={category.id} className="space-y-3">
                            <h3 className="text-lg font-semibold text-white pl-2 border-l-4 border-carnival-pink">
                                {category.title}
                            </h3>

                            <div className="grid gap-3">
                                {category.phrases.map((phrase) => (
                                    <div
                                        key={phrase.id}
                                        className="bg-neutral-800 rounded-xl p-4 border border-neutral-700 shadow-sm flex flex-col gap-3 group"
                                    >
                                        <p className="text-neutral-200 text-lg leading-snug">
                                            "{phrase.text}"
                                        </p>

                                        <div className="flex justify-end gap-2 border-t border-neutral-700/50 pt-3 mt-1">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleFavorite(phrase)}
                                                className={`hover:bg-neutral-700 ${favorites.includes(phrase.id) ? 'text-red-500' : 'text-neutral-500'}`}
                                            >
                                                <Heart className={`w-5 h-5 ${favorites.includes(phrase.id) ? 'fill-current' : ''}`} />
                                            </Button>

                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                onClick={() => copyToClipboard(phrase.text)}
                                                className="bg-neutral-700 hover:bg-neutral-600 text-white gap-2"
                                            >
                                                <Copy className="w-4 h-4" />
                                                Copiar
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default ContextPage;
