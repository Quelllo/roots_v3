import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 md:px-8 py-3 md:py-4 font-bold uppercase tracking-wider text-xs md:text-sm inline-block text-center hover-lift transition-all duration-200';
  
  const variants = {
    primary: 'bg-accent text-paper brutalist-border-sm',
    secondary: 'bg-paper text-ink brutalist-border-sm',
    outline: 'bg-transparent text-ink brutalist-border-sm',
    highlight: 'bg-highlight text-ink brutalist-border-sm'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
