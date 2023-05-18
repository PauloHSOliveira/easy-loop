import { Box, Flex, Button, Text, Link } from '@chakra-ui/react'
import { Lock, EnvelopeSimple } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-relay'
import { loginQuery } from '../../fetchers/auth'

import { InputText } from '../../components'

const SignIn = () => {
  const [commitMutation, isLoading] = useMutation(loginQuery)

  const { handleSubmit, control } = useForm()

  const login = (data: any) =>
    new Promise((resolve, reject) => {
      const { email, password } = data

      commitMutation({
        variables: {
          input: {
            email,
            password,
          },
        },
        onCompleted: (response, errors) => {
          if (errors && errors.length > 0) {
            reject(errors[0])
          } else {
            resolve(response)
          }
        },
        onError: (error) => {
          reject(error)
        },
      })
    })

  const onSubmit = async (data: any) => {
    login(data)
  }

  return (
    <Flex height="100vh">
      <Box bgColor={'#000'} width={'33%'} height={'100%'} />
      <Box
        width={'66%'}
        alignItems={'center'}
        display={'flex'}
        justifyContent={'flex-end'}
        pr={24}
      >
        <Box width={'55%'} textAlign={'center'}>
          <Text mb={12} fontSize={24}>
            Bem vindo
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction={'column'} gap={4}>
              <InputText
                name="email"
                placeholder="Email"
                icon={<EnvelopeSimple size={24} color="#828282" />}
                control={control}
              />
              <InputText
                name="password"
                placeholder="Password"
                type="password"
                icon={<Lock size={24} color="#828282" />}
                control={control}
              />

              <Button
                type="submit"
                isLoading={isLoading}
                mt={4}
                alignSelf="flex-end"
              >
                Login
              </Button>

              <Text mt={4} textAlign="center">
                Dont have an account?{' '}
                <Link color="blue.500" href="#">
                  Sign up
                </Link>
              </Text>
            </Flex>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

export default SignIn
