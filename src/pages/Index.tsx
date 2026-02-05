import VerificationHero from "@/components/VerificationHero";
import VerificationCard from "@/components/VerificationCard";
import LocationSection from "@/components/LocationSection";
import SecurityNotice from "@/components/SecurityNotice";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex-1 flex flex-col max-w-lg mx-auto w-full">
        <VerificationHero />
        <VerificationCard />
        <LocationSection />
        <SecurityNotice />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
