import { Scheme } from '@/types';
import { SchemeCard } from './SchemeCard';

interface SchemesGridProps {
  schemes: Scheme[];
  onSchemeClick: (scheme: Scheme) => void;
}

export const SchemesGrid = ({ schemes, onSchemeClick }: SchemesGridProps) => {
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
      
      <div className="schemes-grid grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
        {schemes.map((scheme) => (
          <SchemeCard
            key={scheme.id}
            scheme={scheme}
            onClick={onSchemeClick}
          />
        ))}
      </div>
    </section>
  );
};