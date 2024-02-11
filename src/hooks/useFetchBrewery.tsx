import axios, { AxiosError} from 'axios'
import { useEffect, useState } from 'react'
import { Brewery } from '../misc/types'
import { BASEURL } from "../misc/constants";

export const useFetchBrewery = () => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        axios.get(BASEURL)
            .then((response) => {
                setBreweries(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { breweries, loading, error };
}

export const useFetchBreweryById = (id: string) => {
    const [brewery, setBrewery] = useState<Brewery | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        axios.get(`${BASEURL}/${id}`)
            .then((response) => {
                setBrewery(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    return { brewery, loading, error };
}