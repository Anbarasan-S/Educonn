import React,{useEffect,useContext,useState} from 'react'
import { Auth } from '../Auth/Validator';
import { ApiAuth } from '../Context/ApiAuth';
import { Spinner } from 'react-bootstrap';
import Loading from './Loading';

const Home = () => {
    const {setAuth,setUser,user,auth}=useContext(ApiAuth);
    const [spinner,setSpinner]=useState(true);

    
 
    useEffect(async()=>{
      try
      {
      const result=await Auth();
      if(!(result.msg==="success"))
      {
        window.location.href="/login";
        return;
      }
      if(!user)
      {
        const{username,profilePicture}=result;
        setUser({username:username,profilePicture:profilePicture});
      }
    }
    catch(err)
    {
      console.log("err")
      window.location.href="/login";
      return;
    }
    },[])
    
  return (
      <>
   {spinner&&<Loading />}
   {auth&&<div>{user.username}</div>}
   </>
    
  )
}

export default Home