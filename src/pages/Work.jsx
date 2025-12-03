import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Card from '../components/Card';
import { projects } from '../data/projects';

const Work = () => {
  const categories = ['ALL', 'WEB', 'UI/UX', 'E-COMM', 'BRAND', 'DEV'];

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted">
            // Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-black mt-4 mb-4 md:mb-6">
            OUR WORK
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-muted">
            A collection of projects that push boundaries, solve real problems, 
            and make the internet a little less boring.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 md:mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 md:px-6 py-2 md:py-3 font-bold uppercase text-xs tracking-widest transition-all duration-200 ${
                index === 0
                  ? 'bg-ink text-paper border-2 border-ink'
                  : 'bg-paper text-ink border-2 border-ink hover:bg-accent hover:text-paper'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className={`block ${
                project.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              <Card className="overflow-hidden group cursor-pointer h-full">
                <div
                  className={`${project.color} ${
                    project.size === 'large' ? 'h-64 md:h-80' : 'h-56 md:h-64'
                  } flex items-center justify-center border-b-4 border-ink relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}
                >
                  <h3 className={`${
                    project.size === 'large' ? 'text-4xl md:text-6xl lg:text-8xl' : 'text-4xl md:text-5xl'
                  } font-display font-black ${
                    project.name === 'TECHFLOW' ? 'text-[#f5f1e8]' : 'text-paper mix-blend-difference'
                  } text-center px-4 md:px-6`}>
                    {project.name}
                  </h3>
                  {project.name !== 'TECHFLOW' && (
                    <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  )}
                </div>
                <div className="p-4 md:p-6">
                  <p className="font-mono text-xs md:text-sm mb-3 md:mb-4 text-muted leading-relaxed">
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
                  <div className="mt-4 md:mt-6 flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all">
                    <span className="text-xs md:text-sm uppercase tracking-wider">View Project</span>
                    <span className="text-base md:text-lg">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="font-mono text-base md:text-lg text-muted mb-4 md:mb-6">
            // Want to see your project here?
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-display font-black mb-6 md:mb-8">
            LET'S WORK TOGETHER
          </h3>
          <a 
            href="/contact" 
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-accent text-paper font-bold uppercase text-xs md:text-sm tracking-widest brutalist-border-sm hover-lift"
          >
            Start a Project
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Work;
