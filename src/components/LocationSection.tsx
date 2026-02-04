import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="px-6 py-6 opacity-0 animate-fade-in-delay-3">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/50 border border-accent/20">
          <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
          <span className="font-body text-foreground/90 text-sm sm:text-base">
            Ami Bar – Peaks Hotel Nanyuki, Kenya
          </span>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
