import Container from '../components/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper py-12 md:py-16 mt-20 md:mt-32 border-t-4 md:border-t-8 border-accent">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="md:col-span-5">
            <h3 className="text-4xl md:text-5xl font-display font-black italic mb-4 md:mb-6">
              ROOTS<span className="text-accent">.</span>
            </h3>
            <p className="text-base md:text-lg text-muted font-mono">
              &#123; creating_exceptional_digital_experiences &#125;
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-4 md:mb-6 font-mono">
              // Navigation
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="/" className="text-base md:text-lg hover:text-accent transition-colors font-bold">Index</a></li>
              <li><a href="/work" className="text-base md:text-lg hover:text-accent transition-colors font-bold">Work</a></li>
              <li><a href="/team" className="text-base md:text-lg hover:text-accent transition-colors font-bold">Team</a></li>
              <li><a href="/contact" className="text-base md:text-lg hover:text-accent transition-colors font-bold">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-4 md:mb-6 font-mono">
              // Connect
            </h4>
            <div className="flex flex-col gap-2 md:gap-3">
              <a href="#" className="text-base md:text-lg hover:text-accent transition-colors font-bold flex items-center gap-2">
                <span className="text-accent">→</span> LinkedIn
              </a>
              <a href="#" className="text-base md:text-lg hover:text-accent transition-colors font-bold flex items-center gap-2">
                <span className="text-accent">→</span> Instagram
              </a>
              <a href="#" className="text-base md:text-lg hover:text-accent transition-colors font-bold flex items-center gap-2">
                <span className="text-accent">→</span> Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-muted pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
          <p className="font-mono text-xs md:text-sm text-muted">
            © {currentYear} ROOTS AGENCY // ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-xs md:text-sm text-muted">
            BUILT WITH VITE, REACT AND TAILWIND CSS :D
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
