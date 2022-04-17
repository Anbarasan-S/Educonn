import React,{useEffect, useState,useContext} from 'react'
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

const Verify = () => {
    const [error,setError]=useState(null);
    const[spinner,setSpinner]=useState(true);


    useEffect(()=>{
      if(window.location.href.indexOf("?token=")===-1)
        {
            window.location.href="/login";
            return;
        }
      const token=window.location.href.split("?token=")[1];
      const fetchRes=async()=>
      {
          try
          {
        const res=await axios.get(`http://localhost:5000/api/v1/verify?token=${token}`)
        if(res.data.status===200)
        {
            window.location.href="/login";
        }
    
    }
    catch(err)
    {
        console.log(err.response.msg);
        setError(err.response.msg);
    }
      }

      fetchRes();
    },[]);


  return (
    <div>
        {spinner&&<div style={{display:"flex",justifyContent:"center",verticalAlign:"middle",alignItems:"center",marginTop:"20rem"}}>
    <Spinner animation="grow" variant="primary"></Spinner>
   <Spinner animation="grow" variant="secondary"></Spinner>
   <Spinner animation="grow" variant="success"></Spinner>
    </div>}

    </div>
  )
}

export default Verify