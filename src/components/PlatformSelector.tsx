import { Button, Menu, MenuButton, MenuItem, MenuList, Text} from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props{
    platform: Platform;
}
const PlatformSelector = ({platform}:Props) => {
    const {data, error, isLoading, setError, setData} = usePlatforms();
    if (error) return null;
  return (
    <>
        
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </>
    
  )
}

export default PlatformSelector