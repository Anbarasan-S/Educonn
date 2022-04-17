import React,{useState} from 'react'
import {Card,Form,Button,Spinner} from 'react-bootstrap'
import axios from 'axios'

const Signup = () => {
  const [data,setData]=useState({
    email:'',
    password:'',
    username:''
  });
  const [err,setErr]=useState(null);
  const [success,setSuccess]=useState(false);
  const {email,password,username}=data;

  const submitFunc=(e)=>{
    e.preventDefault();
  const postData=async()=>
  {
    try
    {
      setErr(<Spinner animation="grow" style={{color:"green"}}/>);
      const res=await axios({method:"POST",url:"http://localhost:5000/api/v1/signup",data:{
        email:email,
        password:password,
        username:username
      }});
      setSuccess(true);
      setErr(null);
    }
    catch(error)
    {
      if(error.message==="Network Error")
      {
        setErr(error.message);
        return;
      }
      console.log(error.response.data.msg);
      setErr(error.response.data.msg);
    }
  }    
  postData();
  }
  return (
    <div>
    {!success&&<>
    <div className='divbtn'>
    </div>
    <div className='contain'>
    <Card  className="container contain__card" style={{backgroundColor:"turquoise"}}>
  <Card.Body >
    <Card.Title style={{color:"darkgreen",marginBottom:"20px"}}>Sign up to EduConn</Card.Title>
     <h4 className='warn'>{err}</h4>
    <Form onSubmit={e=>submitFunc(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"red"}}>Email address</Form.Label>
    <Form.Control type="email" required={true} placeholder="Enter email" value={email} onChange={(e)=>setData({...data,email:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label style={{color:"red"}}>Username</Form.Label>
    <Form.Control type="text" required={true} placeholder="Enter username" value={username} onChange={(e)=>setData({...data,username:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"red"}}>Password</Form.Label>
    <Form.Control type="password" required={true} placeholder="Password" minLength={6} value={password} onChange={(e)=>setData({...data,password:e.target.value})}/>
  </Form.Group>
  <div className="divbtn">
  <Button variant="outline-primary" className="btn rounded-pill" type="submit" name="sign in" >Sign Up</Button>
  </div>
    <div className='or' style={{color:"white"}}>Or</div>
    <div className='divbtn'>
  <Button variant="outline-success" className="btn rounded-pill"  name="google">Sign Up with Google</Button>
  </div>
</Form>
  </Card.Body>
  <div style={{textAlign:"center"}}>Already have an account!! <a href='/login'>Login</a> </div>
</Card>
</div>
</>}
    {success&&<div className='divbtn' style={{marginTop:"20rem"}}>
    <Card style={{ width: '22rem',backgroundColor:"lightgreen",height:"20rem" ,margin:"2rem"}}>
  <Card.Body style={{marginTop:"3rem"}}>
    <Card.Title>Registered Successfully!!!</Card.Title>
    <Card.Text style={{fontSize:"1.2em",color:"green"}}>
      Verification link has sent to <p style={{color:'blue'}}>{email}</p>
      <h4>Please Verify to continue to Educonn</h4>
    </Card.Text>
  </Card.Body>
</Card>      
      </div>}
    </div>
  )
}

export default Signup