
import { addSubscriber, getFromDatabase, createOrUpdataSiteData, uploadImage, retrieveImage } from "./ApiHooks";
import Website from "reactive-site-creator/dist/components/Website";
import Product from "./customComponents/Product";

const extraComponents = {
  Product:{
    component: Product,
    componentName: "Product",
    isNestedComponent: false
  } 
}


function App() {

  return (
    <>
      <Website

        componentOptions = {extraComponents}
        addNewSubscriber = {subscriberFormState=>addSubscriber(subscriberFormState)}
        getFromDataBase = {key=>getFromDatabase(key)}
        retreiveImageFromDB = {fileName=>retrieveImage(fileName)}
        uploadImageToDB = {(file, callback)=> uploadImage(file,callback)}
        saveComponentToDB = {(key,value)=>createOrUpdataSiteData(key,value)}
        isAdmin = {true}
      />
    </>
  )
}

export default App;

