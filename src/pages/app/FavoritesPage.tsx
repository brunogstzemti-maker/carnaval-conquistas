
import AppLayout from '@/components/app/AppLayout';
import { appContent, Phrase } from '@/data/appContent';
import { Button } from '@/components/ui/button';
import { Copy, Trash2, HeartOff } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
    const [favoritePhrases, setFavoritePhrases] = useState<Phrase[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('aborda_favorites');
        if (saved) {
            const ids = JSON.parse(saved);
            setFavoriteIds(ids);
            loadPhrases(ids);
        }
    }, []);

    const loadPhrases = (ids: string[]) => {
        const allPhrases: Phrase[] = [];
        Object.values(appContent).forEach(context => {
            context.categories.forEach(cat => {
                cat.phrases.forEach(p => {
                    if (ids.includes(p.id)) {
                        allPhrases.push(p);
                    }
                });
            });
        });
        setFavoritePhrases(allPhrases);
    };

    const removeFavorite = (id: string) => {
        const newIds = favoriteIds.filter(fid => fid !== id);
        setFavoriteIds(newIds);
        localStorage.setItem('aborda_favorites', JSON.stringify(newIds));
        loadPhrases(newIds);
        toast.success('Removido dos favoritos');
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success('Frase copiada!');
    };

    return (
        <AppLayout title="Meus Favoritos" showBack showFavorites={false}>
            {favoritePhrases.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center gap-4 text-neutral-500">
                    <HeartOff className="w-16 h-16 opacity-20" />
                    <p className="text-lg">Você ainda não salvou nenhuma frase.</p>
                    <Button asChild variant="link" className="text-carnival-pink">
                        <Link to="/app">Voltar e explorar</Link>
                    </Button>
                </div>
            ) : (
                <div className="space-y-4">
                    {favoritePhrases.map((phrase) => (
                        <div
                            key={phrase.id}
                            className="bg-neutral-900 rounded-xl p-4 border border-neutral-800 shadow-sm flex flex-col gap-3"
                        >
                            <p className="text-white text-lg leading-snug">
                                "{phrase.text}"
                            </p>

                            <div className="flex justify-end gap-2 border-t border-neutral-800 pt-3">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeFavorite(phrase.id)}
                                    className="text-neutral-500 hover:text-red-500 hover:bg-red-950/30"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => copyToClipboard(phrase.text)}
                                    className="bg-neutral-800 hover:bg-neutral-700 text-white gap-2"
                                >
                                    <Copy className="w-4 h-4" />
                                    Copiar
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </AppLayout>
    );
};

export default FavoritesPage;
