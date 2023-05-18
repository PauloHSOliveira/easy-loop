import { CardSelector } from '@/components'
import { Flex, Text } from '@chakra-ui/react'
import {
  IdentificationCard,
  Storefront,
  UserSquare,
} from '@phosphor-icons/react'
import { Control } from 'react-hook-form'

type RegisterSecondStepProps = {
  control: Control
}

const RegisterSecondStep = ({ control }: RegisterSecondStepProps) => {
  const cards = [
    {
      title: 'Sou Autonomo',
      description: 'Vou me cadastrar usando o meu CPF',
      icon: <UserSquare color="#0686FC" size={40} />,
      id: '1',
    },
    {
      title: 'Sou MEI',
      description: 'Vou me cadastrar usando o meu CNPJ',
      icon: <Storefront color="#0686FC" size={40} />,
      id: '2',
    },
    {
      title: 'Sou Empresa',
      description: 'Vou me cadastrar usando o meu CNPJ',
      icon: <IdentificationCard color="#0686FC" size={40} />,
      id: '3',
    },
  ]

  return (
    <Flex direction={'column'} width={'100%'}>
      <Text mb={12} fontSize={24} color="#828282">
        Qual o seu Perfil
      </Text>

      <Flex direction={'row'} gap={4} width={'100%'}>
        {cards.map((card) => (
          <CardSelector key={card.id} {...card} />
        ))}
      </Flex>
    </Flex>
  )
}

export { RegisterSecondStep }
