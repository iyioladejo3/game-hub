import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {SimpleGrid, Text} from '@chakra-ui/react'
import apiClient from '../services/api-client';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {

    const {data, error, isLoading, setError, setData} = useGames();
    const skeletons = [1,2,3,4,5,6]

  return (
    <>
    {error && <Text className="text-danger">{error}</Text>}
    
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding='10px'>

        {isLoading && skeletons.map((Skeleton) => ( 
            <GameCardContainer> <GameCardSkeleton key={Skeleton} /> </GameCardContainer>
        ))}
        {data.map( (game) => (
            <GameCardContainer> <GameCard key={game.id} game={game} />  </GameCardContainer>
        ))}
        
    </SimpleGrid>
    </>
  )
}

export default GameGrid