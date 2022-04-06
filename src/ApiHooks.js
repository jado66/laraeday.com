import { API, graphqlOperation } from 'aws-amplify'
import { createSiteData, createSubscriber, updateSiteData, deleteSiteData } from './graphql/mutations'
import { getSiteData} from './graphql/queries'

export async function addSubscriber(subscriberFormState) {
  try {
    if (!subscriberFormState.name || !subscriberFormState.email) return
    const subscriber = {...subscriberFormState}
    await API.graphql(graphqlOperation(createSubscriber, {input: subscriber}))
    alert(`You have been added to the mailing list!`)
  } 
  catch (err) {
      alert(`${JSON.stringify(err)}`)
      }
}

export async function deleteData(key){
  try {
    await API.graphql(graphqlOperation(deleteSiteData, {input: {key:key}}))
  } 
  catch (error) {
    alert(`Error on delete: ${JSON.stringify(error)}`)
  }
}

export async function getFromDatabase(key){
  try {
    if (!key) return
      const data = await API.graphql({ query: getSiteData, variables: {key:key}})
      return JSON.parse(data.data.getSiteData.value)
  } 
  catch (err) {
      // alert(err)
      return null
     }
  }

export async function createOrUpdataSiteData(key,value){
  const newData = {
    key:key,
    value: value
  }
  try {
    await API.graphql(graphqlOperation(updateSiteData, {input: newData}))
  } catch (error) {
    try {
      await API.graphql(graphqlOperation(createSiteData, {input: newData}))
    } catch (error) {
      alert(`Error on add: ${JSON.stringify(error)}`)
    }
  }
}

export async function setValueInDatabase(key,value){
  try {
    if (!key||!value) return

    await API.graphql(graphqlOperation(createSiteData, {key: key,value:value}))
    alert(`You have been added to the mailing list!`)
    
  } 
  catch (err) {
      alert(err)
     }
  }
export async function checkIP(){
  return true
  
}
 
