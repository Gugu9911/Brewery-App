import { useSearchParams } from 'react-router-dom';
import { useFetchBreweryByName } from "../hooks/useFetchBrewery"; // Assuming this is the correct path
import BreweryCards from "../components/BreweryCards";
import { Typography, Box, CircularProgress } from '@mui/material'; // For displaying messages and loading indicator

const ShowResearchResult = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const { breweries, loading, error } = useFetchBreweryByName(name); // Use the custom hook to fetch breweries

  return (
    <Box >
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error">
          An error occurred: {error.message}
        </Typography>
      ) : breweries.length > 0 ? (
        <BreweryCards breweries={breweries} />
      ) : (
        <Typography variant="h6">
          No breweries found matching "{name}".
        </Typography>
      )}
    </Box>
  );
};

export default ShowResearchResult;
