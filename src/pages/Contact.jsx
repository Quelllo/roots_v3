import { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('MESSAGE SENT! We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted">
            // Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-black mt-4 mb-4 md:mb-6">
            LET'S TALK
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-muted">
            Got a project in mind? Want to collaborate? Just want to say hi? 
            We're all ears. Drop us a message and let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8 lg:p-12">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-ink bg-paper focus:border-accent focus:outline-none transition-colors font-mono text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-ink bg-paper focus:border-accent focus:outline-none transition-colors font-mono text-sm md:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <label htmlFor="budget" className="block text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-3">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-ink bg-paper focus:border-accent focus:outline-none transition-colors font-mono appearance-none cursor-pointer text-sm md:text-base"
                  >
                    <option value="">Select a range</option>
                    <option value="<10k">Less than $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div className="mb-6 md:mb-8">
                  <label htmlFor="message" className="block text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-ink bg-paper focus:border-accent focus:outline-none transition-colors resize-none font-mono text-sm md:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-4 md:space-y-6">
            <Card variant="dark" className="p-6 md:p-8">
              <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 md:mb-6 block">
                // Contact Info
              </span>
              
              <div className="space-y-4 md:space-y-6">
                <div>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted mb-2">
                    Email
                  </p>
                  <a href="mailto:hello@roots.agency" className="text-base md:text-lg font-bold text-paper hover:text-accent transition-colors break-all">
                    hello@roots.agency
                  </a>
                </div>

                <div>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted mb-2">
                    Location
                  </p>
                  <p className="text-base md:text-lg font-bold">San Francisco, CA</p>
                  <p className="text-sm text-muted">United States</p>
                </div>

                <div>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted mb-3">
                    Social
                  </p>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="text-base md:text-lg font-bold hover:text-accent transition-colors flex items-center gap-2">
                      <span className="text-accent">→</span> LinkedIn
                    </a>
                    <a href="#" className="text-base md:text-lg font-bold hover:text-accent transition-colors flex items-center gap-2">
                      <span className="text-accent">→</span> Instagram
                    </a>
                    <a href="#" className="text-base md:text-lg font-bold hover:text-accent transition-colors flex items-center gap-2">
                      <span className="text-accent">→</span> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="accent" className="p-6 md:p-8">
              <span className="font-mono text-xs uppercase tracking-widest mb-3 md:mb-4 block opacity-80">
                // Response Time
              </span>
              <h3 className="text-xl md:text-2xl font-display font-black mb-2 md:mb-3">
                QUICK REPLIES
              </h3>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">
                We typically respond within 24 hours on business days. 
                Urgent? Email us directly.
              </p>
            </Card>

            <Card variant="highlight" className="p-6 md:p-8">
              <span className="font-mono text-xs uppercase tracking-widest mb-3 md:mb-4 block">
                // Open Hours
              </span>
              <p className="font-bold text-base md:text-lg mb-2">
                MON - FRI
              </p>
              <p className="text-sm text-muted font-mono">
                9:00 AM - 6:00 PM PST
              </p>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 section-grid p-8 md:p-12 lg:p-16 border-4 border-ink text-center">
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted">
            // Not Ready Yet?
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-black mt-4 mb-4 md:mb-6">
            CHECK OUT OUR WORK FIRST
          </h2>
          <a 
            href="/work" 
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-paper text-ink font-bold uppercase text-xs md:text-sm tracking-widest brutalist-border-sm hover-lift"
          >
            View Portfolio
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
