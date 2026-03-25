import { Clock, MessageSquare, TrendingDown, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Hours on the phone',
    description:
      'You spend 10+ hours a week calling clients who owe you money. That\'s time you could spend on actual work.',
  },
  {
    icon: MessageSquare,
    title: 'Awkward conversations',
    description:
      'Nobody wants to be the debt collector. You end up avoiding the call, and the invoice ages even more.',
  },
  {
    icon: TrendingDown,
    title: 'Cash flow suffers',
    description:
      'Late payments pile up silently. By the time you notice, your cash flow is already strained.',
  },
  {
    icon: AlertTriangle,
    title: 'Invoices slip through',
    description:
      'Without a system, overdue invoices get forgotten. Money you earned just sits uncollected.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Label */}
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          The Problem
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight max-w-2xl">
          You have better things
          <br />
          to do than <span className="text-accent">chase money</span>
        </h2>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="bg-background p-8 md:p-10 group"
              >
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-150"
                />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
