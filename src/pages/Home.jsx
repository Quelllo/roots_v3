import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import { projects } from '../data/projects';

const Home = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Pixel-perfect interfaces that demand attention and drive engagement.',
      icon: '01',
      color: 'accent'
    },
    {
      title: 'UI/UX Design',
      description: 'Research-backed experiences that users actually want to use.',
      icon: '02',
      color: 'highlight'
    },
    {
      title: 'Brand Identity',
      description: 'Visual systems that tell your story louder than words ever could.',
      icon: '03',
      color: 'dark'
    },
    {
      title: 'Development',
      description: 'Bulletproof code that scales from prototype to production.',
      icon: '04',
      color: 'default'
    }
  ];

  // Get first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-grid py-12 md:py-20 lg:py-32 overflow-hidden">
        <Container>
          <div className="max-w-6xl">
            <div className="mb-6 md:mb-8 animate-slide-up">
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted">
                // Digital Design Agency
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black leading-none mb-6 md:mb-8 animate-slide-up animation-delay-200">
              WE CREATE
              <br />
              <span className="text-accent italic">BOLD</span>
              <br />
              EXPERIENCES
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-sans max-w-2xl mb-8 md:mb-12 leading-relaxed animate-slide-up animation-delay-400">
              A design agency that refuses to blend in. We build digital products 
              that make people stop scrolling and start engaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-slide-up animation-delay-600">
              <Button to="/work" variant="primary">
                View Portfolio
              </Button>
              <Button to="/contact" variant="outline">
                Start Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-ink text-paper">
        <Container>
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent">
              // What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black mt-4">
              OUR SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card key={index} variant={service.color} className="p-6 md:p-8 lg:p-10">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-display font-black opacity-20">
                    {service.icon}
                  </span>
                  <span className="font-mono text-xs opacity-60">
                    SERVICE_{service.icon}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed opacity-90">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Work Section */}
      <section className="py-12 md:py-20 section-grid">
        <Container>
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted">
                // Selected Projects
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black mt-4">
                FEATURED WORK
              </h2>
            </div>
            <Button to="/work" variant="secondary" className="self-start md:self-auto">
              All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {featuredProjects.map((project, index) => (
              <Link key={project.id} to={`/work/${project.id}`}>
                <Card className="overflow-hidden group cursor-pointer h-full">
                  <div className={`${project.color} h-48 md:h-64 flex items-center justify-center border-b-4 border-ink group-hover:scale-105 transition-transform duration-300`}>
                    <h3
                      className={`text-3xl md:text-4xl font-display font-black px-4 ${
                        project.name === 'TECHFLOW'
                          ? 'text-[#f5f1e8]'
                          : 'text-paper mix-blend-difference'
                      }`}
                    >
                      {project.name}
                    </h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="font-mono text-xs md:text-sm mb-3 md:mb-4 text-muted">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 md:px-3 py-1 bg-ink text-paper font-mono text-xs font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Preview Section */}
      <section className="py-12 md:py-20 bg-accent text-paper">
        <Container maxWidth="narrow">
          <div className="text-center">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest opacity-80">
              // The People Behind The Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black mt-4 mb-4 md:mb-6">
              MEET THE TEAM
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-10 leading-relaxed opacity-90">
              We're not your typical agency crew. Designers who code. 
              Developers who design. Strategists who actually get it.
            </p>
            <Button to="/team" variant="highlight">
              See Who We Are
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 section-grid relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-highlight rounded-full blur-3xl"></div>
        </div>
        <Container maxWidth="narrow" className="relative">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black mb-6 md:mb-8 leading-none">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span className="italic text-accent">GREAT</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 text-muted font-mono px-4">
              &#123; your_project + our_expertise = exceptional_results &#125;
            </p>
            <Button to="/contact" variant="primary" className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6">
              Get In Touch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
