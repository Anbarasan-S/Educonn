import Cookies from 'js-cookie'
import axios from 'axios';
export const Auth=async()=>{
    const cookie=Cookies.get();
    if(!("username" in cookie&&"token" in cookie))
    {
        return "Insufficient Data";
    }
    try
    {

        const res=await axios({method:"GET",url:"http://localhost:5000/api/v1/auth",headers:{
            'authorization':Cookies.get("token")
        }});
        if(res.status===200)
        {
            return {msg:"success",username:res.data.msg.username,profilePicture:res.data.msg.profilePicture};   
        }
    }
    catch(err)
    {
            return {"msg":"failure"}
    }
}