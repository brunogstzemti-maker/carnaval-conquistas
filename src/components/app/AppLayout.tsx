
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AppLayoutProps {
    children: React.ReactNode;
    title?: string;
    showBack?: boolean;
    showFavorites?: boolean;
    className?: string; // Add className prop to the interface
}

const AppLayout = ({ children, title, showBack = false, showFavorites = true, className = "" }: AppLayoutProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === '/app';

    return (
        <div className="min-h-screen bg-neutral-900 text-white flex justify-center">
            <div className={`w-full max-w-md bg-neutral-950 min-h-screen relative shadow-2xl flex flex-col ${className}`}>
                {/* Header */}
                <header className="fixed top-0 w-full max-w-md z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {showBack && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => navigate(-1)}
                                className="text-white hover:bg-white/10"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                        )}
                        {title && <h1 className="text-lg font-bold tracking-wide">{title}</h1>}
                    </div>

                    <div className="flex gap-2">
                        {showFavorites && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => navigate('/app/favoritos')}
                                className="text-carnival-pink hover:bg-carnival-pink/20"
                            >
                                <Heart className="h-6 w-6" />
                            </Button>
                        )}
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-4 pt-20 pb-8 animate-in fade-in duration-500">
                    {children}
                </main>

                {/* Footer info (optional) */}
                {isHome && (
                    <footer className="p-4 text-center text-xs text-neutral-500 pb-8">
                        <p>Aborda.AI v1.0</p>
                    </footer>
                )}
            </div>
        </div>
    );
};

export default AppLayout;
