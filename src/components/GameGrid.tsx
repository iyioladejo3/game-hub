import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {SimpleGrid, Text} from '@chakra-ui/react'
import apiClient from '../services/api-client';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';



const GameGrid = () => {

    const {games, error, isLoading, setError, setGames} = useGames();

  return (
    <>
    {error && <Text className="text-danger">{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding='10px'>
        {games.map( (game) => (
            <GameCard key={game.id} game={game} /> 
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid