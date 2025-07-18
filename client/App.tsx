import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Lollapalooza from "./pages/Lollapalooza";
import RiotFest from "./pages/RiotFest";
import ArtistRegistration from "./pages/ArtistRegistration";
import ArtistLogin from "./pages/ArtistLogin";
import ArtistDashboard from "./pages/ArtistDashboard";
import Founders from "./pages/Founders";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/lollapalooza" element={<Lollapalooza />} />
          <Route path="/events/riot-fest" element={<RiotFest />} />
          <Route path="/artist-registration" element={<ArtistRegistration />} />
          <Route path="/artist-login" element={<ArtistLogin />} />
          <Route path="/artist-dashboard" element={<ArtistDashboard />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
