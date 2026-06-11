import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ToDoContainer from "./components/ToDoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";


function App() {
 const [users,setUsers] = useState(
        [
            {
                username:"mikey",
                password:"4321"
            },
            {
                username:"abc",
                password:"321"
            }
        ]
    )
    return(<div>
    <BrowserRouter>
  
    <Routes>
        <Route path="/" element={<Login users={users} setUsers={setUsers}/>}></Route>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers}/>}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    
  
</div>
    )
}

export default App;
