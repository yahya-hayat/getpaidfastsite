export default function WhyCallsSection() {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Why calls?
          </p>
          <p className="text-xl md:text-2xl font-semibold tracking-tight leading-snug">
            Emails get ignored. SMS gets swiped away. Then you&apos;re stuck in a
            week-long thread over a 2-minute conversation.{' '}
            <span className="text-accent">A call resolves it on the spot</span> —
            no back-and-forth, no waiting, no chasing.
          </p>
        </div>
      </div>
    </section>
  );
}
