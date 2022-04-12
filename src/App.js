import './App.css';
import {Routes,Route} from 'react-router-dom';
import { ApiAuth } from './Context/ApiAuth';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Login from './Login';
import Post from './Components/Post'
import Verify from './Components/Verify';
import {  useState } from 'react';

function App() {
  const [auth,setAuth]=useState(false);
  const [user,setUser]=useState({});
  return (                                                                 
    <div className='app'>
    <h1 className='title' >EduConn</h1>
      <ApiAuth.Provider value={{auth,setAuth,user,setUser}}>
        <Routes>
      <Route path='/verify' element={<Verify />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path="/post" element={<Post/>}></Route>
        </Routes>
        </ApiAuth.Provider> 
  
    </div>
  );
}

export default App;
