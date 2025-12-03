const Container = ({ children, className = '', maxWidth = 'default' }) => {
  const widths = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };
  
  return (
    <div className={`${widths[maxWidth]} mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
