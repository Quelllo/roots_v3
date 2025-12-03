import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-black mb-6">
              PROJECT NOT FOUND
            </h1>
            <p className="text-lg text-muted mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button to="/work" variant="primary">
              Back to Work
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted hover:text-ink transition-colors font-bold uppercase text-xs tracking-widest"
          >
            <span>←</span> BACK TO WORK
          </button>
        </div>

        {/* Hero Section */}
        <div className={`${project.color} h-64 md:h-96 flex items-center justify-center border-4 border-ink mb-8 md:mb-12 relative overflow-hidden`}>
          <h1 className={`text-5xl md:text-7xl lg:text-9xl font-display font-black ${
            project.name === 'TECHFLOW' ? 'text-[#f5f1e8]' : 'text-paper mix-blend-difference'
          } text-center px-4 md:px-6`}>
            {project.name}
          </h1>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
              // Year
            </span>
            <p className="text-2xl font-display font-black">{project.year}</p>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
              // Client
            </span>
            <p className="text-xl font-bold">{project.client}</p>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
              // Services
            </span>
            <div className="flex flex-wrap gap-2">
              {project.services?.map((service, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-ink text-paper font-mono text-xs font-bold"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-4">
            // Overview
          </span>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Challenge & Solution */}
        {project.challenge && project.solution && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card variant="dark" className="p-6 md:p-8">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-4">
                // Challenge
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-black mb-4">
                THE PROBLEM
              </h3>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {project.challenge}
              </p>
            </Card>

            <Card variant="accent" className="p-6 md:p-8">
              <span className="font-mono text-xs uppercase tracking-widest block mb-4 opacity-80">
                // Solution
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-black mb-4">
                OUR APPROACH
              </h3>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {project.solution}
              </p>
            </Card>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-6">
              // Results
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8">
              THE IMPACT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {project.results.map((result, index) => (
                <Card key={index} variant="highlight" className="p-6 md:p-8">
                  <div className="text-4xl md:text-5xl font-display font-black mb-3 opacity-20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-base md:text-lg font-bold leading-relaxed">
                    {result}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-4">
            // Tags
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-ink text-paper font-mono text-sm font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="section-grid p-8 md:p-12 border-4 border-ink text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6">
            READY TO START YOUR PROJECT?
          </h3>
          <p className="text-lg md:text-xl text-muted mb-8 font-mono">
            Let's create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary">
              Get In Touch
            </Button>
            <Button to="/work" variant="secondary">
              View More Work
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetail;

