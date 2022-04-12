import React,{useEffect, useState} from 'react'
import { Spinner } from 'react-bootstrap';
const Verify = () => {
    const [error,setError]=useState(null);
    const[spinner,setSpinner]=useState()
    useEffect(()=>{
      if(window.location.href.indexOf("?token=")===-1)
        {
            window.location.href="/login";
            return;
        }
      const value=window.location.href.split("?")[1];
      console.log(value);
    },[])
  return (
    <div></div>
  )
}

export default Verify