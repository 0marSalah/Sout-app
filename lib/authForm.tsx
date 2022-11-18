import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { auth } from './mutation'
import NextImage from 'next/image'
import NextLink from 'next/link'

const AuthForm: FC<{ mode: 'signin' | 'signup' }>  = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    router.push('/');
  }
  return (
    <Box height={"100vh"} width="100vw" color="#ffff" bg="black">
      <Flex justify={"center"} align="center" height={"100px"} borderBottom="solid 0.5px #555151">
        <NextLink href="/">
          <NextImage src={"/logo.png"} width={150} height={75} alt="logo" />
        </NextLink>
      </Flex>
      <Flex justify={"center"} align="center" height="calc(100vh - 100px)">
        <Box padding={"50px"} borderRadius="5px" bg="#252525">
          <form onSubmit={handleSubmit}>
            <Input placeholder="Email"  marginY={"5px"} type={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Password" marginY={"10px"} type={"password"} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" bg="green.500" sx={{"&:hover": {
              bg: "green.300"
            }}}
              isLoading={isLoading}
              
            >
              {mode.toLocaleUpperCase()}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm