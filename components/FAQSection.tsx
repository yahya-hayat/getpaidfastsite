'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How does the AI know about my business?',
    answer:
      'When you connect your account, the AI reads your website to learn what your business does, how you work, and who your clients are. This means it can have context-aware conversations that represent your business accurately.',
  },
  {
    question: 'Will the AI sound natural on the call?',
    answer:
      'Yes. We use Ultravox, a state-of-the-art voice AI engine that produces natural, human-sounding speech. It\'s not a robocall — it\'s a professional conversation. You can listen to a sample call on this page.',
  },
  {
    question: 'What if a client gets upset?',
    answer:
      'The AI is polite and professional by default. You can customize the tone from a gentle nudge to a firmer reminder. The AI will never be rude, threatening, or aggressive. It represents your business the way you want.',
  },
  {
    question: 'How does the Xero integration work?',
    answer:
      'You connect your Xero account with one click via OAuth. getpaidfast then imports your invoices, client names, and contact details automatically. When an invoice is overdue, you can trigger an AI call right from the dashboard.',
  },
  {
    question: 'Can I see what the AI said on each call?',
    answer:
      'Absolutely. Every call has a full transcript, recording, and outcome summary in your dashboard. You have complete visibility into every interaction.',
  },
  {
    question: 'How much does it cost per call?',
    answer:
      'We have three plans: Free (15 calls/month), Pro at $70/mo (150 calls/month), and Enterprise at $215/mo (500 calls/month). Start free — no credit card required.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-muted border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          {/* Left — heading */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
              Questions?
              <br />
              <span className="text-accent">Answers.</span>
            </h2>
          </div>

          {/* Right — accordion */}
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <span className="text-base font-semibold tracking-tight group-hover:text-accent transition-colors duration-150">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus size={18} strokeWidth={1.5} className="text-accent shrink-0 mt-1" />
                    ) : (
                      <Plus size={18} strokeWidth={1.5} className="text-muted-foreground shrink-0 mt-1" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
