import { Environment, Network, RecordSource, Store } from 'relay-runtime'

async function fetchRelay(operation: any, variables: any) {
  const response = await fetch('http://localhost:3333/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })

  return await response.json()
}

const environment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})

export default environment
