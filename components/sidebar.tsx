import { Box, Divider, LinkBox, LinkOverlay, List, ListIcon, ListItem } from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdAddBox,
  MdFavorite
} from "react-icons/md"


const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/"
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search"
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library"
  }
]

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdAddBox,
    route: "/createplaylist"
  },
  {
    name:"Liked Songs",
    icon: MdFavorite,
    route: "/likedsongs"
  }
]

const playlist = new Array(30).fill(1).map((_,i) => "playlist " + i++)

const Sidebar = () => {
  return (
    <Box paddingX={"10px"} width="100%" height="calc(100vh - 80px)" bg="black" color="gray">
      <Box paddingY="15px" height="100%">
        <Box marginBottom={"20px"} paddingX="20px" width="120px">
          <NextLink href={"/"}>
            <NextImage src="/logo.png" alt="logo" width={70} height={20} />
          </NextLink>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu, i) => (
              <ListItem paddingX="20px" fontSize="14px" color="white" key={i}>
                <LinkBox>
                  <NextLink href={menu.route}>
                      <ListIcon
                        as={menu.icon}
                        color="gray"
                        marginRight="10px"
                        fontSize={"18px"}
                      />
                      {menu.name}
                  </NextLink>
                </LinkBox>
              </ListItem>
          ))}
          </List>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((menu, i) => (
              <ListItem paddingX="20px" fontSize="14px" color="white" key={i}>
                <LinkBox>
                  <NextLink href={menu.route}>
                    <ListIcon
                      as={menu.icon}
                      color="gray"  
                      marginRight="10px"
                      fontSize={"18px"}
                    />
                    {menu.name}
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider borderColor={"gray.900"} />
        <Box paddingX={"20px"} marginTop="20px" height="55%" overflow={"auto"}>
          <List spacing={2}>
            {playlist.map((menu, i) => (
              <ListItem fontSize="14px" color="white" key={i}>
                <LinkBox>
                  <NextLink href={"/"}>
                    {menu}
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar

/* 
  Thre is an error "Unhandling error" and i fixed it by removing [LinkOverlay] from chakra ui 
*/