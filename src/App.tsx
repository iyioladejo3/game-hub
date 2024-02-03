import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ColorModeSwitch from './components/ColorModeSwitch'
import GameGrid from './components/GameGrid'
import GameCard from './components/GameCard'
import useGames from './hooks/useGames'
import GenreList from './components/GenreList'
function App() {
  return <Grid
  templateAreas={{
    base: `'nav' 'main'`,
    lg: `'nav nav' 'aside main'`,
  }}
>
  <GridItem area={'nav'}>
    <NavBar />
  </GridItem>
  <Show above='lg'>
    <GridItem area={'aside'}>
      <GenreList />
    </GridItem>
  </Show>
  <GridItem area={'main'}>
    <GameGrid/>
  </GridItem>
</Grid>
}

export default App
