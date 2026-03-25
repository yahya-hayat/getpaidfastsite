import { Link, Mic, BookOpen, FileText, Sliders, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Link,
    title: 'Xero Integration',
    description:
      'Invoices, client names, emails — imported automatically. Connect once, never enter data manually again.',
  },
  {
    icon: Mic,
    title: 'Realistic AI Voice',
    description:
      'Natural-sounding calls that represent your business professionally. Not a robocall — a real conversation.',
  },
  {
    icon: BookOpen,
    title: 'Learns Your Business',
    description:
      'The AI reads your website to understand what you do, how you work, and who your clients are. Context-aware from day one.',
  },
  {
    icon: FileText,
    title: 'Full Call Logs',
    description:
      'Complete transcripts and recordings of every call. See exactly what was said, word for word.',
  },
  {
    icon: Sliders,
    title: 'Customizable Tone',
    description:
      'From gentle nudge to firm reminder — set the AI\'s approach to match your relationship with each client.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard Analytics',
    description:
      'Track which calls converted, who needs follow-up, and how much you\'ve recovered. Full visibility.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Label */}
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          Features
        </p>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight max-w-xl">
            Everything you need to
            <br />
            <span className="text-accent">collect what you&apos;re owed</span>
          </h2>
          <p className="text-muted-foreground max-w-sm lg:text-right">
            Built for small businesses, tradies, and accountants who use Xero
            and don&apos;t have time to chase.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-background p-8 group hover:bg-muted transition-colors duration-150"
              >
                <div className="relative">
                  {/* Accent bar */}
                  <div className="h-1 w-8 bg-accent mb-6 group-hover:w-12 transition-all duration-150" />
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-foreground mb-4"
                  />
                  <h3 className="text-base font-semibold tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
