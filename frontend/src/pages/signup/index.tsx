import { Box, Flex, Text, Stepper, Step, useSteps } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import {
  InputText,
  RegisterFirstStep,
  RegisterSecondStep,
} from '../../components'
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

  const { activeStep, goToNext } = useSteps({
    index: 0,
    count: 4,
  })

  const steps = useMemo(
    () => [
      {
        title: 'Step 1',
        description: 'test',
        component: <RegisterFirstStep goToNext={goToNext} />,
      },
      {
        title: 'Step 2',
        description: 'test',
        component: <RegisterSecondStep control={control} />,
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

  return (
    <Flex flex={1} height="100vh" width={'100vw'}>
      <Box
        width={'70%'}
        alignItems={'center'}
        display={'flex'}
        justifyContent={'flex-start'}
      >
        <Box pl={24} width={'70%'} textAlign={'center'}>
          <Stepper width={'100%'} index={activeStep}>
            {steps.map((step, index) => (
              <Step
                style={{ width: '100%' }}
                hidden={activeStep !== index}
                key={index}
              >
                <Flex direction={'column'} width={'100%'}>
                  {step.component}
                </Flex>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      <Box bgColor={'#000'} width={'30%'} height={'100%'} />
    </Flex>
  )
}

export default SignUp
