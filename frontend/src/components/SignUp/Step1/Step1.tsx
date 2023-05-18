// import { Container } from './styles';

import { InputText } from '@/components/Inputs'
import { Button, Flex, Text } from '@chakra-ui/react'
import {
  EnvelopeSimple,
  PersonSimple,
  PhoneCall,
  Lock,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'

type RegisterFirstStepProps = {
  goToNext: () => void
}

const RegisterFirstStep = ({ goToNext }: RegisterFirstStepProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
    },
  })

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Flex direction={'column'} width={'100%'}>
      <Text mb={12} fontSize={24}>
        Crie a sua conta
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction={'column'} gap={4}>
          <InputText
            name="name"
            placeholder="Nome"
            control={control}
            icon={<PersonSimple size={24} color="#828282" />}
          />
          <InputText
            name="email"
            placeholder="Email"
            icon={<EnvelopeSimple size={24} color="#828282" />}
            control={control}
          />
          <InputText
            name="phoneNumber"
            placeholder="Contato"
            control={control}
            icon={<PhoneCall size={24} color="#828282" />}
          />
          <InputText
            name="password"
            placeholder="Password"
            type="password"
            icon={<Lock size={24} color="#828282" />}
            control={control}
          />

          <Button
            type="button"
            mt={4}
            alignSelf="flex-end"
            onClick={goToNext}
            variant={'solid'}
            colorScheme="blue"
          >
            Proximo
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export { RegisterFirstStep }
