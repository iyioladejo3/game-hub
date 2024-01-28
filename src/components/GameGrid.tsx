import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Text} from '@chakra-ui/react'
import apiClient from '../services/api-client';
import useGames from '../hooks/useGames';



const GameGrid = () => {

    const {games, error, isLoading, setError, setGames} = useGames();
  

  return (
    <>
    {error && <Text className="text-danger">{error}</Text>}
    <ul className="list-group">
        {games.map( game=> (<li key={game.id}> {game.name}</li>) )}
    </ul>
    </>
  )
}

export default GameGrid