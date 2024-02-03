import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import {SimpleGrid, Text} from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import useData from '../hooks/useData';

const GenreList = () => {
    const {data, error, isLoading, setError, setData} = useGenres();
    const skeletons = [1,2,3,4,5,6]

  return (
    <>
        {error && <Text className="text-danger">{error}</Text>}
    
        <ul>
            {data.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    </>
  )
}

export default GenreList