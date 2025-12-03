const Card = ({ children, className = '', hover = true, variant = 'default' }) => {
  const hoverStyles = hover ? 'hover-lift' : '';
  
  const variants = {
    default: 'bg-paper text-ink brutalist-border',
    accent: 'bg-accent text-paper brutalist-border',
    highlight: 'bg-highlight text-ink brutalist-border',
    dark: 'bg-ink text-paper brutalist-border',
  };
  
  return (
    <div className={`${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
