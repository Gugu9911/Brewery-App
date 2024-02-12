import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetchBreweryByType } from '../hooks/useFetchBrewery';
import BreweryCards from '../components/BreweryCards';


const FilterResult = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const { breweries, loading, error } = useFetchBreweryByType(type);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <BreweryCards breweries={breweries}/>
            )}
        </div>
    );


    };
export default FilterResult;