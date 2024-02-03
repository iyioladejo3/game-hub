import useData from './useData';

export interface Genre{
    id:number;
    name:string;
    slug:string;
    games_count: number;
    rating:number;
    image_background:string;
};


//hook to share functionalityx across board
const useGenres = () => useData<Genre>('/genres')

export default useGenres;