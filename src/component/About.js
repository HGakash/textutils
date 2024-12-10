import React, { useState } from 'react'

export default function About() {

 const [myStyle, setMystyle] = useState( {
  color:'white',
  backgroundColor:'black'
 }
)

const [btntext, setBtntext] = useState("Enable light mode")
   
  const toggleStyle = () => {
    if(myStyle.color === 'white'){
      setMystyle({
        color:'black',
        backgroundColor:'white',
        border:'2px solid black'
      }
    )
    setBtntext("Enable dark mode");
    }else {
      setMystyle({
        color:'white',
        backgroundColor:'black'
      })
      setBtntext("Enable light mode");
    }
  }  

  return (
    <div className='container' style={myStyle}>
      <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze your text
              </button>
            </h2>
            <div id="collapseOne"  style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Text utils gives a way to Analyze your text quickly and efficiently. Be it word count, charecter count 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                free to use
              </button>
            </h2>
            <div id="collapseTwo"  style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                this textutility is free to use
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                browser compatible
              </button>
            </h2>
            <div id="collapseThree"  style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                this utility is compatible will all browser
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
             <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
        </div>
    </div>
  )
}


