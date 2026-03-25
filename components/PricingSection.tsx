import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'Get started with the basics. No credit card required.',
    features: [
      '15 AI voice calls/month',
      'Advanced call transcripts',
      'Xero integration',
      'Custom AI voices',
    ],
    cta: 'Get Started',
    href: 'https://dashboard.getpaidfast.ai/register',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$70',
    period: '/mo',
    description: 'For businesses serious about collecting what they\'re owed.',
    features: [
      '150 AI voice calls/month',
      'Priority customer support',
      'Free onboarding',
      'Everything in Free plan',
    ],
    cta: 'Get Pro',
    href: 'https://dashboard.getpaidfast.ai/register',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$215',
    period: '/mo',
    description: 'For larger teams with high-volume collections.',
    features: [
      '500 AI voice calls/month',
      'Dedicated account manager',
      'Custom integrations',
      'Free onboarding',
      'Everything in Pro plan',
    ],
    cta: 'Get Enterprise',
    href: 'https://dashboard.getpaidfast.ai/register',
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Label */}
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          Pricing
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-4">
          Simple, honest pricing
        </h2>
        <p className="text-muted-foreground max-w-lg mb-16">
          Start free. Upgrade when you&apos;re ready. No hidden fees,
          no surprises. Simple per-call pricing.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-background p-8 md:p-10 ${
                tier.featured ? 'border-2 border-accent' : ''
              }`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <span className="absolute -top-px left-8 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-wider px-3 py-1 -translate-y-full">
                  Most Popular
                </span>
              )}

              {/* Accent bar */}
              {tier.featured && (
                <div className="absolute top-0 left-8 h-1 w-16 bg-accent" />
              )}

              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {tier.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-muted-foreground text-sm">
                    {tier.period}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-8">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-10">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={tier.href}
                className={`inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm active:translate-y-px transition-all duration-150 ${
                  tier.featured
                    ? 'px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                    : 'group relative text-accent'
                }`}
              >
                {tier.cta}
                <ArrowRight size={16} strokeWidth={1.5} />
                {!tier.featured && (
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-accent origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150" />
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
            30-Day Money-Back Guarantee
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Not happy? Get a full refund within 30 days, no questions asked.
            All prices in USD. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
