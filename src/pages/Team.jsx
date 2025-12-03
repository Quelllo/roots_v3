import Container from '../components/Container';
import Card from '../components/Card';

const Team = () => {
  const teamMembers = [
    {
      name: 'SARAH CHEN',
      role: 'Creative Director',
      bio: 'Turning caffeine into pixels since 2010.',
      number: '01',
      accent: 'accent'
    },
    {
      name: 'MARCUS JOHNSON',
      role: 'Lead Developer',
      bio: 'Code poet. Problem solver. Coffee addict.',
      number: '02',
      accent: 'highlight'
    },
    {
      name: 'ELENA RODRIGUEZ',
      role: 'UX Designer',
      bio: 'User research enthusiast. Flow state architect.',
      number: '03',
      accent: 'accent'
    },
    {
      name: 'DAVID KIM',
      role: 'Brand Strategist',
      bio: 'Finding the story behind every brand.',
      number: '04',
      accent: 'dark'
    },
    {
      name: 'AISHA PATEL',
      role: 'UI Designer',
      bio: 'Pixel perfectionist. Detail obsessed.',
      number: '05',
      accent: 'highlight'
    },
    {
      name: 'JAMES WILSON',
      role: 'Full Stack Dev',
      bio: 'Building bridges between design and code.',
      number: '06',
      accent: 'accent'
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted">
            // The People
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-black mt-4 mb-4 md:mb-6">
            MEET THE TEAM
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-muted">
            Talented humans who believe good design isn't just pretty—it's purposeful, 
            bold, and unapologetically different.
          </p>
        </div>

        {/* Culture Section */}
        <div className="mb-16 md:mb-20 grid md:grid-cols-2 gap-4 md:gap-6">
          <Card variant="dark" className="p-6 md:p-10 lg:p-12">
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">
              // Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 md:mb-6">
              OUR APPROACH
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              We believe the best work comes from collaboration, not ego. 
              Every project is a chance to push boundaries and create something 
              that actually matters.
            </p>
          </Card>

          <Card variant="accent" className="p-6 md:p-10 lg:p-12">
            <span className="font-mono text-xs uppercase tracking-widest mb-4 block opacity-80">
              // Culture
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 md:mb-6">
              HOW WE WORK
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Remote-first. Async-friendly. Results-driven. We're obsessed with 
              craft, constantly learning, and always questioning if there's a 
              better way to do things.
            </p>
          </Card>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 md:p-8 group cursor-pointer">
              <div className="mb-4 md:mb-6 flex items-start justify-between">
                <div className={`w-16 h-16 md:w-20 md:h-20 border-4 border-ink flex items-center justify-center ${
                  member.accent === 'accent' ? 'bg-accent' :
                  member.accent === 'highlight' ? 'bg-highlight' :
                  member.accent === 'dark' ? 'bg-ink' : 'bg-paper'
                }`}>
                  <span className={`text-2xl md:text-3xl font-display font-black ${
                    member.accent === 'dark' ? 'text-paper' : 'text-ink'
                  }`}>
                    {member.number}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted">
                  MEMBER_{member.number}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-black mb-2 group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-accent font-bold uppercase text-xs tracking-widest mb-3 md:mb-4">
                {member.role}
              </p>
              <p className="text-muted font-mono text-sm leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-16 md:mt-20 section-grid p-8 md:p-12 lg:p-16 border-4 border-ink">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted">
              // Careers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-black mt-4 mb-4 md:mb-6">
              WANT TO JOIN US?
            </h2>
            <p className="text-base md:text-lg text-muted mb-6 md:mb-8 font-mono">
              We're always looking for talented designers and developers who 
              care about craft and aren't afraid to challenge the status quo.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-ink text-paper font-bold uppercase text-xs md:text-sm tracking-widest border-2 border-ink hover:-translate-y-1 transition-transform"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
