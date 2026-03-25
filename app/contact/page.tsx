import { ArrowLeft, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 mb-12"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to home
        </a>

        {/* Heading */}
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          Contact
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-4">
          Get in touch
        </h1>
        <p className="text-muted-foreground max-w-lg mb-16">
          Have a question, need help, or just want to chat? Reach out — we&apos;d love to hear from you.
        </p>

        {/* Contact details */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Phone size={20} strokeWidth={1.5} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold tracking-tight mb-1">Phone</p>
              <a
                href="tel:+64211065683"
                className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                +64 21 106 5683
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail size={20} strokeWidth={1.5} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold tracking-tight mb-1">Email</p>
              <a
                href="mailto:hello@getpaidfast.ai"
                className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                hello@getpaidfast.ai
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock size={20} strokeWidth={1.5} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold tracking-tight mb-1">Hours</p>
              <p className="text-muted-foreground">
                7:00 AM — 9:00 PM NZST
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Monday to Friday
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
