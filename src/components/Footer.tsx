const Footer = () => {
  return (
    <footer className="px-6 py-10 mt-auto opacity-0 animate-fade-in-delay-4">
      <div className="max-w-md mx-auto text-center">
        {/* Decorative Line */}
        <div className="section-divider mb-8" />

        {/* Copyright */}
        <p className="font-display text-foreground/90 text-lg mb-2">
          © Peaks Hotel Nanyuki
        </p>

        {/* Tagline */}
        <p className="font-body text-muted-foreground text-sm tracking-wide">
          Hospitality • Quality • Trust
        </p>

        {/* Year */}
        <p className="font-body text-muted-foreground/50 text-xs mt-4">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
