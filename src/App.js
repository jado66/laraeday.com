import Amplify, { API, graphqlOperation, JS } from 'aws-amplify'

import { addSubscriber, getFromDatabase, checkIP, createOrUpdataSiteData } from "./ApiHooks";

import awsExports from './aws-exports';

import { useState, useEffect } from 'react';

import { createSiteData, deleteSiteData, updateSiteData } from './graphql/mutations'

import Website from "reactive-site-creator/dist/components/Website";
import { getSiteData, listSiteData } from './graphql/queries';
Amplify.configure(awsExports);

function App() {
  const [isAuthenticated, setIsAthenticated] = useState(false)

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await checkIP()
      
      // alert(response)
      setIsAthenticated(response)
    }

    fetchMyAPI()
  },[]);


  return (
    <>
      
      <Website
        addNewSubscriber = {subscriberFormState=>addSubscriber(subscriberFormState)}
        getFromDataBase = {key=>getFromDatabase(key)}
        saveComponentToDB = {(key,value)=>createOrUpdataSiteData(key,value)}
        isAdmin = {isAuthenticated}
      />
    </>
  )
}

export default App;