import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import {ListItem, SimpleGrid, Text, List, HStack, Image, Spinner, Button, Heading} from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import useData from '../hooks/useData';
import getCroppedImageUrl from '../services/image-url';
import usePlatforms from '../hooks/usePlatforms';
interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}:Props) => {
    //usePlatforms();
    const {data, error, isLoading} = useGenres();

  return (
    <>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List>
            {isLoading && <Spinner/>}
            {error && <Text>{null}</Text>}
            {data.map((genre) => 
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)} ></Image>
                    <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id ===selectedGenre?.id ? 'bold':'normal'} onClick = {() => onSelectGenre(genre)}fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    </>
  )
}

export default GenreList


    //