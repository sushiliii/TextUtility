
import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import NavBarbootstrap from './components/NavBarbootstrap';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
const [modeval,setmode]=useState("light");
const[alert,setAlert]=useState(null);
  const taoglefunction=()=>{
    if(modeval==="light"){
      setmode("dark");
     document.body.style.backgroundColor='#343a40'
     showAlert("Dark made has been enabled !","success")
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light made has been enabled !","success")
    }
  }
  const showAlert=(message,type)=>{
setAlert(
  {
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000)

  }
  return (
  <>
{/* <Navbar tittle="TestUtils"/> */}
{/* <TextForm heading="Enter your text "/> */}
<Router>
<NavBarbootstrap mode={modeval} togele={taoglefunction}/>
<Alert alert={alert}></Alert>
<div className='container my-2'>
<Switch>
          <Route exact path="/abaut">
            <AboutUs/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter your text " mode={modeval} showAlert={showAlert} /> 
          </Route>
        </Switch>

</div>
</Router>    
</>
  );
}

export default App;
