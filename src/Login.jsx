import axios from 'axios';
import React,{useState,useContext, useEffect} from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import Loading from './Components/Loading';
import { ApiAuth } from './Context/ApiAuth';

const Home = () => {
  const [data,setData]=useState({
    email:'',
    password:''
  });
  const {email,password}=data;
  const [spinner,setSpinner]=useState(false);
  const {setUser,setAuth,Auth}=useContext(ApiAuth);
  const [error,setError]=useState({status:false});

  useEffect(()=>{
    if(Auth)
    {
      window.location.href="/";
      return;
    }
  },[]);

  const submitFunc=(e)=>
  {
    e.preventDefault();
    setSpinner(true);
    const fetchData=async()=>
    {
      try
      {
      const res=await axios({method:"GET",url:"http://localhost:5000/login",data:{email:email,password:password}});
      const{username,profilePictrue}=res.data;
      setAuth(true);
      setUser({username:username,profilePicture:profilePictrue});
      }
      catch(err)
      {
        if(err.message==="Network Error")
        {
        setError({msg:"Network Error",status:true});
        setSpinner(false);
        return;
        }
        setError({msg:err.response.data.msg,status:true});
        setSpinner(false);
      }
    }
    fetchData();
  }
  return (
    <div>
    {!spinner&&
    <div className='contain'>
    <Card  className="container contain__card" style={{backgroundColor:"wheat"}}>
  <Card.Body >
    <Card.Title style={{color:"darkgreen",marginBottom:"20px"}}>Login into EduConn</Card.Title>
    <Form onSubmit={e=>submitFunc(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"red"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required={true} value={email} onChange={(e)=>setData({...data,email:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"red"}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} required={true} minLength={6} onChange={(e)=>setData({...data,password:e.target.value})}/>
  </Form.Group>
  <div className='divbtn'>
  <Button variant="outline-primary" className="btn rounded-pill" type="submit" >Sign in</Button>
  </div>
    <div className='or' style={{color:"black"}}>Or</div>
    <div className="divbtn">
  <Button variant="outline-success" className="btn rounded-pill">Sign in with Google</Button>
  </div>
</Form>
  </Card.Body>
  <div style={{textAlign:"center",marginTop:"2 rem"}}>New to EduConn!! <a href='/signup'>  Sign up</a> </div>
</Card>
</div>}
{
  spinner&&<Loading/>
}
{
  error.status&&<h1>{error.msg}</h1>
}
    </div>
  )
}
export default Home