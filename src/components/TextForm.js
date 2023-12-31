import React,{ useState } from 'react'

export default function TextForm(props) {
    const [text, setText] =useState("");
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    const cangeuppercase=()=>{
        console.log("the text "+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been changed to Upper case !","success")
    }
    const cangelowercase=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Text has been changed to Lower case !","success")
    }
    const ClearText=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text has been cleared","success")
    }
    const handleCopyText=()=>{
      const textss=  document.getElementById("box")
      textss.select();
        navigator.clipboard.writeText(textss.value);
        props.showAlert("Text copy successfully !!!","success")
       
    }
 const handledExtraSpace=()=>{
    
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed","success") 
 }
  return (
    <>
    <div>
        <h4 className={`text-${props.mode==="light"?"dark":"light"}`}>{props.heading}</h4>
        <div className="mb-1">
  <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}} value={text} id="box" rows="8"></textarea>
  <button type="Submit" className="btn btn-primary my-3 mx-1" onClick={cangeuppercase}>changeToUpperCase</button>
  <button type="Submit" className="btn btn-primary my-3 mx-1" onClick={cangelowercase}>changeToLowerCae</button>
  <button type="Submit" className="btn btn-primary my-3 mx-1" onClick={ClearText}>ClearText</button>
  <button type="Submit" className="btn btn-primary my-3 mx-1" onClick={handleCopyText}>Copy Text</button>
  <button type="Submit" className="btn btn-primary my-3 mx-1" onClick={handledExtraSpace}>Remove Extra Space </button>
   </div>
    </div>
    <div className='container' style={{backgroundColor:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"white"}}>
     <p>Total word {text.length===0?0:text.trim().split(" ").length} and Total character {text.length}</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter above text box to preview here"}</p>
    </div>
    </>
  )
}
