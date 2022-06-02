import Amplify,{ API, graphqlOperation, Storage } from 'aws-amplify'
import { createSiteData, createSubscriber, updateSiteData, createPicture, deleteSiteData } from './graphql/mutations'
import { getSiteData, getPicture } from './graphql/queries'

import awsExports from './aws-exports';

Amplify.configure(awsExports);

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
 

export async function uploadImage(file, callback){
    Storage.put(file.name, file, {
      contentType: 'image/png'
    })
    .then((result) =>{
      callback(URL.createObjectURL(file))
      console.log(result)
      
      const image = {
        name: file.name,
        file: {
          bucket: awsExports.aws_user_files_s3_bucket,
          region: awsExports.aws_user_files_s3_bucket_region,
          key: "public/" + file.name
        }
      }

      addImageDataToDB(image)
      console.log("added complete")
    })
    .catch(err=>{console.log(err); alert(JSON.stringify(err))});
}

export async function retrieveImage(fileName){
  try {
    const file = await Storage.get(fileName)
    return file

  } catch (error) {
    alert(error)
  }
}

const addImageDataToDB = async (image) =>{
  console.log('addImageToDB')
  try {
    await API.graphql(graphqlOperation(createPicture, {input:image}))
  } catch (error) {
    console.log(error)
    alert(JSON.stringify(error))
  }
}