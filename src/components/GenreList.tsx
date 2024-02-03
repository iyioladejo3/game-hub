import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import {ListItem, SimpleGrid, Text, List, HStack, Image, Spinner} from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import useData from '../hooks/useData';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const {data, error, isLoading, setError, setData} = useGenres();
    //if (isLoading) return <Spinner></Spinner>

  return (
    <>
        <List>
            {isLoading && <Spinner/>}
            {error && <Text>{null}</Text>}
            {data.map((genre) => 
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} ></Image>
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    </>
  )
}

export default GenreList