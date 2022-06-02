// Product
import React, { useContext, useState} from 'react'
import ContentEditable from 'react-contenteditable'
// import useComponentStorage from 'reactive-site-creator/dist/components/helpers';
import { WebContext } from "reactive-site-creator/dist/components/Website"

import PictureFrame from "reactive-site-creator/dist/components/subComponents/PictureFrame"

import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Product(props){
  
    const titleEditable = React.createRef();
    const descriptionEditable =  React.createRef();

    const {webStyle, adminSettings} = useContext(WebContext)
  
    let initialState = props.content
    if (Object.keys(initialState).length === 0){
        initialState =
        {
            productImageName: "",
            productTitle: "Title",
            price: 1.0,
            description: `Product description`,
        }
    }
  
    const [content, setContent] = useState(initialState)//useComponentStorage(props.pageID+props.id,initialState);
    const [isShowButtons, showButtons] = useState(false)
    const [isSettingsMode, setIsSettingsMode]= useState(false)
  
    const handleContentChange = (key,value) => {
      setContent((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    };
  
    const handleStyleChange = (key,value) => {
      setContent((prevState) => ({
        ...prevState,
        styles: {
          ...prevState.style,
          [key]: value
        }
      }));
    };
  
  
  
    // let componentStyle = {}
    // try {
    //   componentStyle = 
    //   {
    //     size: webStyle.componentStyles.header.size,
    //     textColor:webStyle.componentStyles.header.textColor,
    //     ...content.styles,
    //   }
    // } catch (error) {
      
    // }
    const borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor]

    const shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor]
    let borderAndShadow = ""
    if (webStyle.componentStyles.all.borderSize!==0){
        borderAndShadow +=`${borderColor} 0px 1px ${webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${webStyle.componentStyles.all.borderSize}px, `
        }
    borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

  
    return(
  
      <div 
        style={{...props.style,}}
        className="px-5 text-center relative-div g-0 " data-no-dnd="true"
        onMouseEnter={() => {
          showButtons(true);
        }}
        onMouseLeave={() => {
          showButtons(false);
        }}
      >
        {isSettingsMode ?
        <div>
            <h3>Settings</h3>
        </div>
        :
        <div className='flex-row d-flex'>

            <div className='col me-3' >
                <PictureFrame
                    adminSettings = {adminSettings} 
                    webStyle = {webStyle} 
                    // images = {images}
                    imageName = {content.productImageName} 
                    id = {props.id+"picture"} 
                    setImageName = {(value)=>{handleContentChange("productImageName",value)}} 
                    isNested
                />
                {/* <img style={{minHeight:"100px", minWidth:"100px", backgroundColor:webStyle.colors.darkAccent}}/> */}
            </div>

            <div 
                className='col ms-3 text-start p-3 flex-column d-flex'
                style={{backgroundColor:webStyle.colors.lightShade, boxShadow: borderAndShadow}}   
            >
                {/* <span>{JSON.stringify(content)}</span> */}

                <ContentEditable
                    className=' mb-0'
                    //   style={{color:webStyle.colors[componentStyle.textColor]}}
                    spellCheck = "false"
                    innerRef={titleEditable}
                    html={content.productTitle} // innerHTML of the editable div
                    disabled={!adminSettings.isEditMode}      // use true to disable editing
                    onChange={evt=>handleContentChange("productTitle",evt.target.value)} // handle innerHTML change
                    tagName={'h2'} // Use a custom HTML tag (uses a div by default)
                /> 
                {/* <span>{content.price}</span> */}
                {adminSettings.isEditMode?
                <div className='input-group '>
                    <span className='input-group-text bg-transparent border-0 ms-0 ps-0 pe-2'>$</span>
                    <input className='form-control-plaintext no-arrows ms-3 w-75 py-0' type={"number"} onChange={evt=>handleContentChange("price",evt.target.value)} value={content.price}/>
                </div>
                :
                <div className='my-2 '>
                    <span className='pe-2'>$</span>
                    <span className='ms-3'>{content.price}</span>
                </div>
                }
                
                <ContentEditable
                    className=' mb-0 flex-row flex-grow-1'
                    //   style={{color:webStyle.colors[componentStyle.textColor]}}
                    spellCheck = "false"
                    innerRef={descriptionEditable}
                    html={content.description} // innerHTML of the editable div
                    disabled={!adminSettings.isEditMode}      // use true to disable editing
                    onChange={evt=>handleContentChange("description",evt.target.value)} // handle innerHTML change
                    tagName={'p'} // Use a custom HTML tag (uses a div by default)
                /> 
                <button className='btn btn-outline-secondary'>Add to cart</button>
            </div>
        </div>
        }        
        
        {isShowButtons && adminSettings.isEditMode &&
        <button className="relative-r btn" style={{marginRight:"2.5em"}} data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
          <FontAwesomeIcon icon={faCog} style={{color:webStyle.colors.darkShade}} />
        </button>}
      </div>
      )
  };
  
  