import React from 'react'  //rfc
import PropTypes from 'prop-types'  //impt
import { Link } from 'react-router-dom'

//props(properties): think it as a form(template) with empty fields like name,address 
//we need to fill this according to who is using it but there is also content which is same
//for everyone
export default function Navbar({pallette,toggleMode,text,title,mode,About="About us"}) {
  return(
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
  {/* customization of component by passing props of which is using that component */}
    <Link className="navbar-brand" to='/'>{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{About}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
<div className="btn-group" role="group" aria-label="Basic example">
  <button onClick={pallette} value={"#997C70"} type="button"  style={{backgroundColor:'#997C70'}}>color1</button>
  <button type="button" onClick={pallette} value={"#F72C5B"} style={{backgroundColor:'#F72C5B'}}>color2</button>
  <button type="button" onClick={pallette} value={"#AB4459"} style={{backgroundColor:'#AB4459'}}>color3</button>
</div>
  <div className={`form-check form-switch text-${mode==='light'?'dark':'light'} mx-5`}>
       <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
       <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text}</label>
</div>
    </div>
  </div>
</nav>
  )
}

//You can define static propTypes together with the prop-types library to declare the 
//types of the props accepted by your component.
//These types will be checked during rendering and in development only.
//incase other type of props passed other than declared then it will throw error
Navbar.propTypes = {title:PropTypes.string.isRequired,
      About:PropTypes.string,
      mode:PropTypes.string
}

//this default props are assigned when no props are passed for decalred ones 
// Navbar.defaultProps = {
//   title: 'default title',
//   About: 'default about here'
// }
