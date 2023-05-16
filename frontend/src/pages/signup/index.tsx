import {
  Box,
  Flex,
  Button,
  Text,
  Stepper,
  Step,
  useSteps,
} from '@chakra-ui/react'
import {
  Lock,
  EnvelopeSimple,
  PersonSimple,
  PhoneCall,
  UserSquare,
  Storefront,
  IdentificationCard,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'

import { CardSelector, InputText } from '../../components'
import { useMemo } from 'react'

const SignUp = () => {
  const {
    //handleSubmit,
    //formState: { isSubmitting },
    control,
  } = useForm()

  // const onSubmit = (data: any) => {
  //   // eslint-disable-next-line no-console
  //   console.log(data)
  // }

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
      id: '1',
    },
    {
      title: 'Sou Empresa',
      description: 'Vou me cadastrar usando o meu CNPJ',
      icon: <IdentificationCard color="#0686FC" size={40} />,
      id: '1',
    },
  ]

  const Step1 = () => {
    return (
      <Flex direction={'column'} width={'100%'}>
        <Text mb={12} fontSize={24}>
          Crie a sua conta
        </Text>
        <Flex direction={'column'} gap={4}>
          <InputText
            name="name"
            placeholder="Nome"
            control={control}
            icon={<PersonSimple />}
          />
          <InputText
            name="email"
            placeholder="Email"
            icon={<EnvelopeSimple />}
            control={control}
          />
          <InputText
            name="phoneNumber"
            placeholder="Contato"
            control={control}
            icon={<PhoneCall />}
          />
          <InputText
            name="password"
            placeholder="Password"
            type="password"
            icon={<Lock />}
            control={control}
          />
        </Flex>
      </Flex>
    )
  }

  const Step2 = () => {
    return (
      <Flex direction={'column'} width={'100%'}>
        <Text mb={12} fontSize={24}>
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

  const Step3 = () => {
    return (
      <Flex direction={'column'} width={'100%'}>
        <Text mb={12} fontSize={24}>
          Crie a sua conta
        </Text>
        <Flex direction={'column'} gap={4} width={'100%'}>
          <Flex width={'100%'} gap={2}>
            <InputText name="firstName" placeholder="Nome" control={control} />
            <InputText
              name="lastName"
              placeholder="Sobrenome"
              control={control}
            />
          </Flex>
          <InputText
            name="registerDocPersonal"
            placeholder="CPF"
            control={control}
          />
          <Flex width={'100%'} gap={2}>
            <InputText
              name="phoneNumber"
              placeholder="Telefone"
              control={control}
            />
            <InputText
              name="dateOfbirth"
              placeholder="Data de nascimento"
              control={control}
            />
          </Flex>
          <InputText
            name="motherName"
            placeholder="Nome da mãe"
            control={control}
          />
        </Flex>
      </Flex>
    )
  }

  const Step31 = () => {
    return (
      <Flex direction={'column'} width={'100%'}>
        <Text mb={12} fontSize={24}>
          Dados da Sua empresa
        </Text>
        <Flex direction={'column'} gap={4} width={'100%'}>
          <InputText name="registerMei" placeholder="CNPJ" control={control} />
          <InputText
            name="fantasyName"
            placeholder="Nome fantasia"
            control={control}
          />
          <InputText
            name="socialName"
            placeholder="Razão social"
            control={control}
          />

          <Flex width={'100%'} gap={2}>
            <InputText
              name="openDate"
              placeholder="Data de Abertura"
              control={control}
            />
            <InputText
              name="companyPhone"
              placeholder="Número de telefone"
              control={control}
            />
          </Flex>
        </Flex>
      </Flex>
    )
  }

  const Step4 = () => {
    return (
      <Flex direction={'column'} width={'100%'}>
        <Text mb={12} fontSize={24}>
          Endereço
        </Text>
        <Flex direction={'column'} gap={4} width={'100%'}>
          <InputText name="zipCode" placeholder="CEP" control={control} />
          <InputText name="address" placeholder="Endereço" control={control} />
          <Flex width={'100%'} gap={2}>
            <InputText
              name="numberOfAddress"
              placeholder="Número"
              control={control}
            />
            <InputText
              name="complement"
              placeholder="Complemento"
              control={control}
            />
          </Flex>
          <InputText
            name="neighboorhood"
            placeholder="Bairro"
            control={control}
          />
          <Flex width={'100%'} gap={2}>
            <InputText name="city" placeholder="Cidade" control={control} />
            <InputText name="state" placeholder="Estado" control={control} />
          </Flex>
        </Flex>
      </Flex>
    )
  }

  const steps3 = {
    personal: <Step3 />,
    mei: <Step31 />,
    compnay: <Step31 />,
  }

  const steps = useMemo(
    () => [
      {
        title: 'Step 1',
        description: 'test',
        component: <Step1 />,
      },
      {
        title: 'Step 2',
        description: 'test',
        component: <Step2 />,
      },
      {
        title: 'Step 3',
        description: 'test',
        component: steps3['mei'],
      },
      {
        title: 'Step 4',
        description: 'test',
        component: <Step4 />,
      },
    ],
    []
  )

  const { activeStep, goToNext } = useSteps({
    index: 0,
    count: steps.length,
  })

  return (
    <Flex height="100vh">
      <Box
        width={'66%'}
        alignItems={'center'}
        display={'flex'}
        justifyContent={'flex-start'}
        pl={24}
      >
        <Box width={'55%'} textAlign={'center'}>
          <Stepper width={'100%'} index={activeStep}>
            {steps.map((step, index) => (
              <Step
                style={{ width: '100%' }}
                hidden={activeStep !== index}
                key={index}
              >
                <Flex direction={'column'} width={'100%'}>
                  {step.component}

                  <Button
                    type="button"
                    mt={4}
                    alignSelf="flex-end"
                    onClick={goToNext}
                  >
                    Proximo
                  </Button>
                </Flex>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      <Box bgColor={'#000'} width={'33%'} height={'100%'} />
    </Flex>
  )
}

export default SignUp
