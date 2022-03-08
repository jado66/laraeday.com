import { API, graphqlOperation } from 'aws-amplify'
import { createSubscriber } from './graphql/mutations'

export async function addSubscriber(subscriberFormState) {
    try {
      if (!subscriberFormState.name || !subscriberFormState.email) return
      const subscriber = {...subscriberFormState}
      await API.graphql(graphqlOperation(createSubscriber, {input: subscriber}))
      alert("Success")
    } catch (err) {
      alert('error creating todo:', err)
    }
    alert(`Adding new subscriber :${JSON.stringify(subscriberFormState)}`)
  }