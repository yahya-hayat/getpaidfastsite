export default function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-foreground font-semibold text-lg tracking-tight mb-2">
              getpaidfast<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI that calls your overdue clients so you don&apos;t have to.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Product
            </p>
            <ul className="space-y-2">
              {['How It Works', 'Features', 'Pricing', 'FAQ'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Company
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} getpaidfast. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made in New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
