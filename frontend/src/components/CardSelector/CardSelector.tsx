import { Card, CardBody, CardHeader, Flex, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'

type CardProps = {
  icon: ReactElement
  title: string
  description: string
}

const CardSelector = ({ icon, title, description }: CardProps) => {
  return (
    <Card>
      <CardHeader
        alignItems={'center'}
        display={'flex'}
        justifyContent={'center'}
      >
        {icon}
      </CardHeader>
      <CardBody>
        <Flex direction={'column'}>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </Flex>
      </CardBody>
    </Card>
  )
}

export { CardSelector }
