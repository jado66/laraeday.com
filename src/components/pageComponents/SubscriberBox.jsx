import React, {useState, useEffect, useContext} from 'react'
import ContentEditable from 'react-contenteditable'

import {WebContext} from "../../App"

export default function SubscriberBox(props){
    const contentEditable = React.createRef();
    const [header, setHeader] = useState(`Subscribe Here`);
    const [formState,setFormState] = useState({name:"",email:""})
    const {webStyle, msgPort, appMethods} = useContext(WebContext)

    const setContent = (content) => {
      if (Object.keys(content).length !== 0 && content){
        setHeader(content.header)
      }
      else if (props.index === 0){
        setHeader(props.pageName)
      }
    } 
  
    const getContent = () => {      
      let content = {}
      content.header = header
      return (content)
    }
    
    // Load content
    useEffect(() => {
      setContent(props.content)
    }, []);
  
    // Save data
    useEffect(() => {
      if (msgPort == "save"){
        const componentData = { 
          name: props.componentName,
          content: getContent()
        }
        appMethods.saveComponentData(props.pageName,props.index,componentData)
      }
    }, [msgPort]);

    const handleChange = (evt) => {
        setHeader(evt.target.value);
    };
    const handleFormChange = (key, value) => {
        setFormState({ ...formState, [key]: value });
    };

    const addNewSubscriber = () =>{
        if (!validateEmail(formState.email)){
            alert("Email isn't a valid email")
        }
        else{
            appMethods.addSubscriber(formState)
            setFormState({name:"",email:""})
        }
    }

    const validateEmail = (email) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email);
    }

    return(

      <div className="px-5 text-center w-50 mx-auto boxShadow py-3 rounded" data-no-dnd="true" style={{backgroundColor:webStyle.darkShade}}>
        <ContentEditable
          className='apply-font-primary mb-4'
          style={{color:webStyle.lightShade}}
          spellCheck = "false"
          innerRef={contentEditable}
          html={header} // innerHTML of the editable div
          disabled={!webStyle.isEditMode}      // use true to disable editing
          onChange={handleChange} // handle innerHTML change
          tagName='h3' // Use a custom HTML tag (uses a div by default)
          /> 
        <form className=' rounded mb-3' >
            <div className='row'>
                <div className = "form-group col">
                    <input 
                        type="text" 
                        className = "form-control mb-2" 
                        id="name" 
                        placeholder="Name" 
                        value={formState.name}
                        onChange = {event => handleFormChange("name",event.target.value)}
                    />
                    <input 
                        type="email" 
                        className = "form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter Email" 
                        value={formState.email} 
                        onChange = {event => handleFormChange("email",event.target.value)}
                    />
                </div>
                
                <div className = "form-group col-3 d-flex">
                    <button type='button' className = "btn btn-light my-auto " onClick={addNewSubscriber}>Sign Me Up</button>

                </div>

            </div>
           
        </form>
      </div>

      )
  };