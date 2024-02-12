import axios, { AxiosError} from 'axios'
import { useEffect, useState } from 'react'
import { Brewery } from '../misc/types'
import { BASEURL } from "../misc/constants";
import exp from 'constants';

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

export const useFetchBreweryByName = (name:string | null) => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        axios.get(`${BASEURL}?by_name=${name}`)
            .then((response) => {
                setBreweries(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [name]);

    return { breweries, loading, error };
}

export const useFetchBreweryByType = (type:string | null) => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        axios.get(`${BASEURL}?by_type=${type}`)
            .then((response) => {
                setBreweries(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [type]);

    return { breweries, loading, error };
}