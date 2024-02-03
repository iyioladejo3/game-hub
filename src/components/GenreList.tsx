import React from 'react'
import useGenres from '../hooks/useGenres';
import {SimpleGrid, Text} from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GenreList = () => {
    const {genres, error, isLoading, setError, setGenres} = useGenres();
    const skeletons = [1,2,3,4,5,6]

  return (
    <>
        {error && <Text className="text-danger">{error}</Text>}
    
        <ul>
            {genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    </>
  )
}

export default GenreList