import useData from './useData';
import genres from '../data/genres'

export interface Genre{
    id:number;
    name:string;
    slug:string;
    games_count: number;
    rating:number;
    image_background:string;
};


//hook to share functionalityx across board
//const useGenres = (selectedGenre: Genre | null) => useData<Genre>('/genres')
const useGenres = () => ({data:genres,isLoading:false, error:null});

export default useGenres;