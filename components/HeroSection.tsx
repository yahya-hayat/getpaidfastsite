import { ArrowRight } from 'lucide-react';
import HeroDashboard from '@/components/HeroDashboard';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 w-full py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            {/* Label */}
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent mb-6 animate-fade-in-up">
              AI-Powered Collections
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none animate-fade-in-up animation-delay-100">
              Stop Wasting
              <br />
              Hours Chasing
              <br />
              <span className="text-accent">Late Payments</span>
            </h1>

            {/* Subhead */}
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-normal max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              getpaidfast connects to your Xero account, finds overdue invoices,
              and calls your clients with a polite, professional reminder —
              automatically. You get the time back.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up animation-delay-300">
              {/* Primary CTA */}
              <a
                href="https://dashboard.getpaidfast.ai/register"
                className="group relative inline-flex items-center gap-2.5 text-accent font-semibold uppercase tracking-wider text-sm active:translate-y-px transition-all duration-150"
              >
                Start Free
                <ArrowRight size={16} strokeWidth={1.5} />
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-accent origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#demo"
                className="inline-flex items-center px-6 py-3 border border-foreground text-foreground font-semibold uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-colors duration-150 active:translate-y-px"
              >
                Hear a Sample Call
              </a>
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="hidden lg:block animate-fade-in-up animation-delay-300">
            <HeroDashboard />
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8 text-center lg:text-left animate-fade-in-up animation-delay-400">
          {[
            { value: '10hrs+', label: 'Saved per week' },
            { value: 'Free', label: 'To start' },
            { value: '100%', label: 'Call visibility' },
            { value: '30s', label: 'Setup time' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
