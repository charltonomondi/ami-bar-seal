import { ShieldCheck } from "lucide-react";
import peaksLogo from "@/assets/peaks-hotel-logo.jpeg";

const VerificationHero = () => {
  return (
    <section className="text-center pt-12 pb-8 px-6">
      {/* Logo in Trapezoid Shape */}
      <div className="relative inline-flex items-center justify-center mb-6">
        <div 
          className="relative overflow-hidden bg-gradient-to-b from-card to-background border-2 border-accent/40 shadow-lg"
          style={{
            clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
            padding: "1.5rem 2rem 1rem 2rem",
          }}
        >
          <img 
            src={peaksLogo} 
            alt="Peaks Hotel Nanyuki Logo" 
            className="w-28 h-auto object-contain"
          />
        </div>
      </div>

      {/* Verification Icon */}
      <div className="relative inline-flex items-center justify-center mb-8">
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-accent/10 blur-xl animate-pulse-glow" />
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center">
          <ShieldCheck className="w-10 h-10 text-accent" strokeWidth={1.5} />
        </div>
      </div>

      {/* Heading */}
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3 opacity-0 animate-fade-in">
        Authentic Beverage
        <span className="block text-accent gold-glow">Verification</span>
      </h1>

      {/* Sub-heading */}
      <p className="font-body text-muted-foreground text-lg opacity-0 animate-fade-in-delay-1">
        Peaks Hotel Nanyuki – Ami Bar
      </p>

      {/* Decorative Line */}
      <div className="section-divider mt-8 opacity-0 animate-fade-in-delay-2" />
    </section>
  );
};

export default VerificationHero;
