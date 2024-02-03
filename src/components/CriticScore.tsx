import React from 'react'
import { Game } from '../hooks/useGames';
import { Badge } from '@chakra-ui/react';

export interface Props{
    score: number;
}

const CriticScore = ({score}:Props) => {
    let color = score > 75 ? 'green': score > 60 ? 'yellow': '';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX='5px' borderRadius='4px' >{score}</Badge>
  )
}

export default CriticScore