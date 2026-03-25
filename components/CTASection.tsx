import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-28 md:py-40 border-t border-border relative overflow-hidden">
      {/* Decorative oversized text */}
      <div
        className="absolute bottom-0 left-0 text-[8rem] md:text-[14rem] font-bold leading-none text-border/20 select-none pointer-events-none -z-10 hidden md:block"
        aria-hidden="true"
      >
        GO
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
          Ready?
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-none mb-6">
          Stop chasing.
          <br />
          <span className="text-accent">Start collecting.</span>
        </h2>

        <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-base md:text-lg">
          Connect your Xero account and let AI handle the calls.
          Free to start, takes 30 seconds to set up.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://dashboard.getpaidfast.ai/register"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold uppercase tracking-wider text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150 active:translate-y-px"
          >
            Get Started Free
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
          <a
            href="#demo"
            className="group relative inline-flex items-center gap-2 text-muted-foreground font-semibold uppercase tracking-wider text-sm hover:text-foreground transition-colors duration-150"
          >
            Hear a Sample Call
            <span className="absolute left-0 -bottom-1 h-px w-full bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />
          </a>
        </div>
      </div>
    </section>
  );
}
