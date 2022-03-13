import { useState, useEffect, createContext } from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import { addSubscriber } from "./ApiHooks";

import awsExports from './aws-exports';





import Website from "reactive-site-creator/dist/components/Website";
Amplify.configure(awsExports);

function App() {
    

  return (
    <Website/>
  )
}

export default App;





/*
 <Route path="/test">
              { <TestPage/> 
              <DynamicPage  webStyle = {webStyle} userIsAdmin = {userIsAdmin} viewAsNormalUser = {viewAsNormalUser}
                            defaultComponentList = { ["Header","Navbar","Mosaic","Header","Mosaic","BlogPreview"]}  componentOptions = {["Navbar","Header","Mosaic","DynamicForm","CardPaymentBlock","BlogPreview"]}
                               updateWebStyles = {updateWebStyles} closeStyleEditor = {hideWebsiteStyleEditor} showStyleEditor = {isShowEditor}/>
          </Route>
          <Route path="/blog-post/:id" component = {ViewPostPage}/>
          <Route path="/">
          <DynamicPage  webStyle = {webStyle} userIsAdmin = {userIsAdmin} viewAsNormalUser = {viewAsNormalUser}
                            defaultComponentList = { ["Header","Navbar","Mosaic","Header","Mosaic","BlogPreview"]}  componentOptions = {["Navbar","Header","Mosaic","DynamicForm","CardPaymentBlock","BlogPreview"]}
                               updateWebStyles = {updateWebStyles} closeStyleEditor = {hideWebsiteStyleEditor} showStyleEditor = {isShowEditor}/>
          </Route>
          
*/