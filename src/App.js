import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Footer from './components/Footer';

function App() {
  const [Mode,setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="#042743";
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor ="white";
    }
  }
  return (
    <> 
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <div className="container my-4" >
       <TextForm heading="Enter your text to analyze" mode={Mode}/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
