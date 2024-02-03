import {useEffect, useState} from 'react';
import apiClient, {CanceledError} from '../services/api-client';

export interface Genre{
    id:number;
    name:string;
    slug:string;
    games_count: number;
    rating:number;
    image_background:string;
};

interface FetchGenresResponse{
    count:number;
    results:Genre[];
};



//hook to share functionalityx across board
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')

    const [isLoading, setLoading] = useState(false);
  
    useEffect (() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then((res) => {
                setGenres(res.data.results)
                setLoading(false);
              })
              .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
              })
        return () => controller.abort();
    }, [])
    return {genres, error, isLoading, setError, setGenres};

};

export default useGenres;