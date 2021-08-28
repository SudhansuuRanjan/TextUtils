import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Footer from './components/Footer';
import Alert from './components/Alert'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message , type) =>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(()=>{
        setAlert(null);
     },1500)
  }

  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor ="white";
    showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <> 
     <Router>
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-4" >
     
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={Mode}/>
          </Route>
        </Switch>
  
    </div>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
