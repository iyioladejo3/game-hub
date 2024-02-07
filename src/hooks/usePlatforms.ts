import useData from './useData';

export interface Platform{
    id:number;
    name:string;
    slug:string;
}

//hook to share functionalityx across board
const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;