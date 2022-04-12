import React,{useState} from 'react'
import {Card,Form,Button} from 'react-bootstrap'
const Home = () => {
  const [data,setData]=useState({
    email:'',
    password:''
  });
  const {email,password}=data;
  return (
    <div>
    <div className='contain'>
    <Card  className="container contain__card" style={{backgroundColor:"wheat"}}>
  <Card.Body >
    <Card.Title style={{color:"darkgreen",marginBottom:"20px"}}>Login into EduConn</Card.Title>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"red"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setData({...data,email:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"red"}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setData({...data,password:e.target.value})}/>
  </Form.Group>
  <div className='divbtn'>
  <Button variant="outline-primary" className="btn rounded-pill">Sign in</Button>
  </div>
    <div className='or' style={{color:"black"}}>Or</div>
    <div className="divbtn">
  <Button variant="outline-success" className="btn rounded-pill">Sign in with Google</Button>
  </div>
</Form>
  </Card.Body>
  <div style={{textAlign:"center",marginTop:"2 rem"}}>New to EduConn!! <a href='/signup'>  Sign up</a> </div>
</Card>
</div>
    </div>
  )
}
export default Home