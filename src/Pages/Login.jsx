import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom"


const Login = (props)=>{
    const navigate = useNavigate()
    const [eusername,setEusername] = useState("")
    const [epassword,setEpassword] = useState("")
    const [ruser,setRuser] = useState(true)
    const users = props.users

    
    const handleUInp = (evt)=>
    {
        setEusername(evt.target.value)
    }
    const handlePInp = (evt)=>
    {
        setEpassword(evt.target.value)
     }
    const checkUser = ()=>
    {
        let userfound = false
        users.forEach((item) => {
            
            if(item.username === eusername && item.password === epassword)
            {
                console.log("Login Successfull");
                userfound = true 
                navigate("/landing", {state:{user:eusername}})
            }  
        });
        if(userfound === false)
        {
            console.log("Login Failed");
            setRuser(false)
            
        }
    }
    return(
     <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <div>
          <h1 className="text-3xl font-medium">Hey Hi</h1>
          {ruser?<p>I help your manage activities after you login : )</p> : <p className="text-red-500">Please sign up before you Login!!</p>}
          
          <div className="my-2 flex flex-col gap-3">
            <input
              type="text"
              placeholder="username"
              className="w-52 border-black bg-transparent border rounded-md p-1"
              onChange={handleUInp}
            />
            <input
              type="text"
              placeholder="password"
              className="w-52 border-black bg-transparent border rounded-md p-1"
              onChange={handlePInp}
            />
            <button className="bg-violet-500 w-28 rounded-md p-1" onClick={checkUser}>Login</button>
          </div>
          <p>Already have an account? <Link to={"/Signup"} className="underline">Sign Up</Link></p>
        </div>
      </div>
    </div>

    )
}
export default Login