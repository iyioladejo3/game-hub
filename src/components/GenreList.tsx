
import useGenres, { Genre } from '../hooks/useGenres';
import {HStack, List, ListItem, Image, Text, Spinner, Button, Heading} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import usePlatforms from '../hooks/usePlatforms';
import genres from '../data/genres';


interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre|null;

}
const GenreList = ({selectedGenre, onSelectGenre}:Props) => {
    usePlatforms();
    const {data, error,isLoading} = useGenres();
    if (isLoading) return <Spinner/>
    if (error) return null
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data.map(genre=> 
            <ListItem key={genre.id} paddingY={'5px'}>
                <HStack><Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)} />
                <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold':'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button></HStack>
            </ ListItem>)}
    </List>
    </>
  )
};

export default GenreList;