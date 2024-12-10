import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); //
  const [alert,setAlert] = useState(null);
  const [toggleText,setToggleText] = useState('Enable dark mode');

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const custom = (event) => {
      document.body.style.backgroundColor = event.target.value;
  }

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark');
      setToggleText('Enable light mode');
      document.body.style.backgroundColor = '#161515';
      showAlert("dark mode enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000)

      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500)

    }else{
      setMode('light');
      setToggleText('Enable dark mode');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled","success");
      document.title = 'TextUtils - Light Mode';

    }
  }
  return (
  <>
<Router>
      <Navbar 
        title="textutils" 
        pallette={custom} 
        mode={Mode} 
        text={toggleText} 
        toggleMode={toggleMode} 
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          {/* Route for About page */}
          <Route exact path='/about' element={<About/>}/>

          {/* Route for Home page */}
          <Route 
           exact path="/" 
            element={
              <TextForm 
                showAlert={showAlert} 
                mode={Mode} 
                heading="Enter the text to analyze below" 
              />
             }  
           />
        </Routes>
      </div>
    </Router>
</>
  );
}


export default App;

