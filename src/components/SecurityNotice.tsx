import { AlertTriangle } from "lucide-react";

const SecurityNotice = () => {
  return (
    <section className="px-6 py-6 opacity-0 animate-fade-in-delay-4">
      <div className="max-w-md mx-auto">
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
            <p className="font-body text-sm text-foreground/80 leading-relaxed">
              If this QR code is missing, damaged, or does not open this page,
              the product should be{" "}
              <span className="text-foreground font-medium">
                reported to hotel management immediately
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityNotice;
