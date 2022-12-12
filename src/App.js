import { useState ,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Response from "./Response";
import Home from "./Home";


function App() {

  useEffect(()=>{
  },[])

  return (
    //for two screens:one for the form other for the payment successful screen
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Response" element={<Response/>}/>
      </Routes>
    {/* <div style={{ height: "200px" }}></div> */}
  </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;