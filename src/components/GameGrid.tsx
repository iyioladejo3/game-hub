import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {SimpleGrid, Text} from '@chakra-ui/react'
import apiClient from '../services/api-client';
import useGames, { Game, Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props{
    gameQuery: GameQuery
    //selectedGenre: Genre | null;
    //selectedPlatform:Platform | null;
}



const GameGrid = ({gameQuery}:Props) => {

    const {data, error, isLoading, setError, setData} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6]

  return (
    <>
    {error && <Text className="text-danger">{error}</Text>}
    
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={6} padding='10px'>

        {isLoading && skeletons.map((Skeleton) => ( 
            <GameCardContainer key={Skeleton}> <GameCardSkeleton  /> </GameCardContainer>
        ))}
        {data.map((game) => (
            <GameCardContainer key={game.id}> <GameCard  game={game} />  </GameCardContainer>
        ))}
        
    </SimpleGrid>
    </>
  )
}

export default GameGrid