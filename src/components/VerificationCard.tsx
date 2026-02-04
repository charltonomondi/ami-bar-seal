const VerificationCard = () => {
  return (
    <section className="px-6 py-6 opacity-0 animate-fade-in-delay-2">
      <div className="luxury-card p-6 sm:p-8 text-center max-w-md mx-auto">
        {/* Status Badge */}
        <div className="mb-6">
          <span className="verification-badge animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-verified animate-pulse" />
            Verified & Approved
          </span>
        </div>

        {/* Message */}
        <p className="font-body text-foreground/90 text-base sm:text-lg leading-relaxed">
          This beverage is an{" "}
          <span className="text-accent font-medium">official product</span>{" "}
          served exclusively at Ami Bar, Peaks Hotel Nanyuki.
        </p>

        {/* Seal Effect */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              className="w-5 h-5 text-accent/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <span>Authenticity Confirmed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationCard;
