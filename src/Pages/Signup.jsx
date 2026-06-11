import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Signup = (props) => {
  const users = props.users
  const setUsers = props.setUsers

  const navigate = useNavigate()
  const [eusername,setEusername] = useState("")
  const [epassword,setEpassword] = useState("")
  const [econfirmpassword,setEconfirmpassword] = useState("")

  const handleUInp = (evt)=>
    {
        setEusername(evt.target.value)
    }
  const handlePInp = (evt)=>
    {
        setEpassword(evt.target.value)
     }
  const handleCPInp = (evt)=>
  {
        setEconfirmpassword(evt.target.value)
  }
    const addUser = () => {
  if (epassword !== econfirmpassword) {
    alert("Passwords don't match!");
    return;
  }
  if(epassword && econfirmpassword && eusername){
     setUsers([...users, { username: eusername, password: epassword }]);
    navigate("/")
    setEusername("")
    setEpassword("")
    setEconfirmpassword("")

  }
   
  
};
 
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <div>
          <h1 className="text-3xl font-medium">Hey Hi</h1>
          <p>Sign up here : )</p>
          <div className="my-2 flex flex-col gap-3">
            <input
              type="text"
              value={eusername}
              placeholder="username"
              className="w-52 border-black bg-transparent border rounded-md p-1"
              onChange={handleUInp}
            />
            <input
              type="text"
              value={epassword}
              placeholder="password"
              className="w-52 border-black bg-transparent border rounded-md p-1"
              onChange={handlePInp}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="w-52 border-black bg-transparent border rounded-md p-1"
              onChange={handleCPInp}
            />
            <button className="bg-[#FCA201] w-28 rounded-md p-1" onClick={addUser}>Sign Up</button>
          </div>
          <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
