import {
  Input,
  InputGroup,
  InputRightElement,
  InputProps,
  IconButton,
  InputLeftElement,
} from '@chakra-ui/react'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { ReactElement, useState } from 'react'
import { Control, useController } from 'react-hook-form'

type InputTypes = {
  icon?: ReactElement
  name: string
  control: Control<any>
  placeholder: string
} & InputProps

const InputText = ({
  name,
  type = 'text',
  icon,
  control,
  placeholder,
}: InputTypes) => {
  const [newType, setType] = useState(type)
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
  })

  return (
    <InputGroup>
      {icon && <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>}
      <Input
        {...field}
        id={name}
        type={newType}
        placeholder={placeholder}
        isInvalid={!!errors[name]}
        variant={'primary'}
      />
      {errors[name] && (
        <span role="alert" style={{ color: 'red' }}>
          {errors.root?.message}
        </span>
      )}
      {type === 'password' && (
        <InputRightElement>
          <IconButton
            bgColor={'transparent'}
            aria-label="show-password"
            onClick={() =>
              setType((old) => (old === 'password' ? 'text' : 'password'))
            }
          >
            {newType === 'text' ? <EyeSlash size={24} /> : <Eye size={24} />}
          </IconButton>
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export { InputText }
