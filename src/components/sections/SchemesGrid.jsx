import { SchemeCard } from './SchemeCard';

export const SchemesGrid = ({ schemes, onSchemeClick, isReceiver = false }) => {
  return (
    <section className="schemes-library mt-12">
      <div className="library-header flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-foreground">Featured Public Schemes</h2>
        <a 
          href="#" 
          className="text-primary font-semibold hover:text-primary-hover transition-colors duration-200 text-sm"
        >
          View all Public Schemes &gt;
        </a>
      </div>
      
      <div className="schemes-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((scheme) => (
          <SchemeCard 
            key={scheme.id} 
            scheme={scheme} 
            onClick={() => onSchemeClick(scheme)}
            isReceiver={isReceiver}
          />
        ))}
      </div>
    </section>
  );
};