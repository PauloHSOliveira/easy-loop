import { Box, Flex, Button, Text, Link } from '@chakra-ui/react'
import { Lock, EnvelopeSimple } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'

import { InputText } from '../../components'

const SignIn = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm()

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data)
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
                icon={<EnvelopeSimple />}
                control={control}
              />
              <InputText
                name="password"
                placeholder="Password"
                type="password"
                icon={<Lock />}
                control={control}
              />

              <Button
                type="submit"
                isLoading={isSubmitting}
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
