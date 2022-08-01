import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ] );

    return (
        <div className="row row-cols-md-3 row-cols-1 g-2 g-lg-3">
            {
                heroes.map( hero => {
                    return <HeroCard 
                        key={hero.id} 
                        {...hero}
                    />
                })
            }
        </div>
        
    )
}
