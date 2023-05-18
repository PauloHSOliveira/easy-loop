import { graphql } from 'react-relay'

const loginQuery = graphql`
  mutation authLoginMutation($input: LoginInput!) {
    login(input: $input) {
      user {
        id
        email
      }
      token
    }
  }
`
export { loginQuery }
