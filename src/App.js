// import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Loader from './loader'
import Home from './home/home'
// import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [active,change]=useState(true)
  useEffect(()=>{
    const re = setInterval(()=>{
      change(false)
    },1000)
  });
  return (
    <>
    {active?<Loader></Loader>:<Home></Home>}
    </>
  );
}

export default App;
