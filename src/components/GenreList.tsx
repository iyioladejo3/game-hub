import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import {ListItem, SimpleGrid, Text, List, HStack, Image, Spinner, Button} from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import useData from '../hooks/useData';
import getCroppedImageUrl from '../services/image-url';
interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}:Props) => {
    const {data, error, isLoading, setError, setData} = useGenres();

  return (
    <>
        <List>
            {isLoading && <Spinner/>}
            {error && <Text>{null}</Text>}
            {data.map((genre) => 
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} ></Image>
                    <Button fontWeight={genre.id ===selectedGenre?.id ? 'bold':'normal'} onClick = {() => onSelectGenre(genre)}fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    </>
  )
}

export default GenreList