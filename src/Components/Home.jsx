import React,{useEffect,useContext,useState} from 'react'
import { Auth } from '../Auth/Validator';
import { ApiAuth } from '../Context/ApiAuth';
import { Spinner } from 'react-bootstrap';


const Home = () => {
    const {setAuth,setUser,user,auth}=useContext(ApiAuth);
    const [spinner,setSpinner]=useState(true);

    
    useEffect(()=>{
        const validator=async()=>{
          const res=await Auth();
           if(res.msg==="success")
          {
            setAuth(true);
            setSpinner(false);
            setUser({username:res.username,profilePicture:res.profilePicture});
          }
          else
          {
            window.location.href="/login";
            setSpinner(false);
            return;
          }
        }
        validator();
        console.log(user);
        return;
      },[setAuth,setUser]);
    
  return (
      <>
   {spinner&&<div style={{display:"flex",justifyContent:"center",verticalAlign:"middle",alignItems:"center",marginTop:"20rem"}}><Spinner animation="grow" variant="success"></Spinner>
   <Spinner animation="grow" variant="success"></Spinner>
   <Spinner animation="grow" variant="success"></Spinner>
    </div>}
   {auth&&<div>{user.username}</div>}
   </>
    
  )
}

export default Home