import { useParams } from 'react-router-dom';
import { useFetchBreweryById } from '../hooks/useFetchBrewery';
import Link from '@mui/material/Link';

const Breweries = () => {
    const { id } = useParams();
    const { brewery, loading, error } = useFetchBreweryById(id || "");

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <h1>{brewery?.name}</h1>
            <p>{brewery?.brewery_type}</p>
            <p>{brewery?.city}, {brewery?.state_province}, {brewery?.country}</p>
            <p>{brewery?.street}</p>
            <p>{brewery?.phone}</p>
            Website: {brewery?.website_url ? <Link href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</Link> : 'N/A'}
        </div>
    )
}
export default Breweries;