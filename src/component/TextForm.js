import React, {useState} from 'react'

//using react hooks
export default function TextForm(props) {
  const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
  }  
  const handleLower = () => {
    let another = text.toLowerCase();
    setText(another);
    props.showAlert("converted to lowercase!","success");
  }

  const clearText = (event) => {
      let clear  = event.target.value = "";
      setText(clear);
      props.showAlert("Text cleared!","success");

  }
  const handleChange = (event) => {
    // console.log("onchange handler");
    setText(event.target.value);  //chaging the state (updating the text variable by setText function) here by listening to event
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Text copied!","success");

  }

  const hadnleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
   props.showAlert("Extra space removed!","success");
      
  }

  const[text,setText] = useState('');//initial state

  return (
    <>
<div className="container"  style={{color:props.mode==='dark'?'white':'#161515'}}>
  <h1 className='mb-3'>{props.heading} </h1>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',
    color:props.mode==='dark'?'white':'#161515'}} onChange={handleChange}  id="myBox" rows="9"></textarea>
 <button disabled={text.length===0} className='btn btn-primary my-3 mx-2'  onClick={handleClick}>convert to uppercase</button>
 <button disabled={text.length===0}  className='btn btn-primary my-3' onClick={handleLower}>convert to lowercase</button>
 <button disabled={text.length===0}  className='btn btn-primary my-3 mx-2' onClick={clearText}>clear Text</button>
 <button disabled={text.length===0}  className='btn btn-primary my-3 mx-2' onClick={handleCopy}>copy Text</button>
 <button disabled={text.length===0}  className='btn btn-primary my-3 mx-2' onClick={hadnleExtraSpaces}>remove space</button>
 
 </div>
 <div className="container my-3" style={{color:props.mode==='dark'?'white':'#161515'}}>
    <h2>your text summary</h2>
    <p>{text.split(" ").filter((element)=> element.length!=0).length} words {text.split('').filter((element)=>element!=" ").length} charecters</p>
    <p>total read time is {text.split(" ").length/238} minute</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"nothing to preview"}</p>
 </div>
    </>
  )
}


