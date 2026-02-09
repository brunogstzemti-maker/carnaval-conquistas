import { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        // Check if there's a stored end time
        const storedEndTime = localStorage.getItem("carnivalOfferEndTime");

        if (storedEndTime) {
            const now = new Date().getTime();
            const distance = new Date(parseInt(storedEndTime)).getTime() - now;

            if (distance > 0) {
                setTimeLeft(Math.floor(distance / 1000));
            } else {
                // Timer expired, restart or stay at 0
                setTimeLeft(0);
                // Optional: Reset for demo purposes
                // initTimer(); 
            }
        } else {
            initTimer();
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const initTimer = () => {
        const endTime = new Date().getTime() + 15 * 60 * 1000;
        localStorage.setItem("carnivalOfferEndTime", endTime.toString());
        setTimeLeft(15 * 60);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 animate-fade-in cursor-default bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg">
            <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2 text-carnival-orange font-bold uppercase tracking-wider text-xs md:text-sm animate-pulse">
                    <span>⚠️</span>
                    <span>ATENÇÃO: O Carnaval está chegando e essa oferta vai sumir!</span>
                </div>

                <div className="flex items-center gap-2 bg-card/50 px-3 py-1 rounded-md border border-primary/20">
                    <span className="text-muted-foreground text-xs font-semibold uppercase hidden md:inline-block">
                        Expira em:
                    </span>
                    <span className="font-display text-xl md:text-2xl text-gradient-gold tabular-nums tracking-widest font-bold">
                        {formatTime(timeLeft)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
