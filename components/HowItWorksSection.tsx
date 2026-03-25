const steps = [
  {
    number: '01',
    title: 'Connect Xero',
    description:
      'Link your Xero account in one click. Your invoices, client names, and contact details are imported automatically. No data entry.',
  },
  {
    number: '02',
    title: 'AI Makes the Call',
    description:
      'Our AI agent calls your overdue clients with a polite, professional reminder. It learns your business from your website and adapts its tone to match.',
  },
  {
    number: '03',
    title: 'Track Everything',
    description:
      'See full call logs, transcripts, and results in your dashboard. Know exactly what was said, what happened, and who still needs follow-up.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 lg:py-32 bg-muted border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Label */}
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          How It Works
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
          Three steps to getting
          <br />
          <span className="text-accent">paid on time</span>
        </h2>

        {/* Steps */}
        <div className="mt-16 space-y-0 divide-y divide-border">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-[80px_200px_1fr] gap-4 lg:gap-8 py-10 first:pt-0 group"
            >
              {/* Number */}
              <span className="font-mono text-4xl lg:text-5xl font-bold text-muted-foreground group-hover:text-accent transition-colors duration-150 self-center">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold tracking-tight self-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed self-center max-w-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
