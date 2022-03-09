import { API, graphqlOperation } from 'aws-amplify'
import { createSubscriber } from './graphql/mutations'

export async function addSubscriber(subscriberFormState) {
    try {
      if (!subscriberFormState.name || !subscriberFormState.email) return
      const subscriber = {...subscriberFormState}
      await API.graphql(graphqlOperation(createSubscriber, {input: subscriber}))
      alert(`You have been added to the mailing list!`)
    } 
    catch (err) {
        alert(err)
       }
  }