import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AppHome from "./pages/app/AppHome";
import ContextPage from "./pages/app/ContextPage";
import SOSPage from "./pages/app/SOSPage";
import SignalReaderPage from "./pages/app/SignalReaderPage";
import FavoritesPage from "./pages/app/FavoritesPage";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (

  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/termos-de-uso" element={<TermsOfUse />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />

          {/* Aborda.AI App Routes */}
          <Route path="/app" element={<AppHome />} />
          <Route path="/app/context/:id" element={<ContextPage />} />
          <Route path="/app/sos" element={<SOSPage />} />
          <Route path="/app/leitor-sinais" element={<SignalReaderPage />} />
          <Route path="/app/favoritos" element={<FavoritesPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
