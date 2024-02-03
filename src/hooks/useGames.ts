import {useEffect, useState} from 'react';
import apiClient, {CanceledError} from '../services/api-client';

export interface Platform{
    id:number;
    name: string;
    slug: string;
}
export interface Game{
    id:number;
    name:string;
    background_image:string;
    rating:number;
    parent_platforms:{
        map(arg0: (p: { platform: any; }) => any): Platform[];platform: Platform
};
};

interface FetchGamesResponse{
    count:number;
    results:Game[];
};


//hook to share functionalityx across board
const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    const [isLoading, setLoading] = useState(false);
  
    useEffect (() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then((res) => {
                setGames(res.data.results)
                setLoading(false);
              })
              .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
              })
        return () => controller.abort();
    }, [])
    return {games, error, isLoading, setError, setGames};

};

export default useGames;