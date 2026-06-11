import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import ToDoContainer from "../components/ToDoContainer"
const Landing = ()=>
{
    const data = useLocation()
    
    return(<>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          {/* HEADER */}
          <Header name={data.state.user}/>
          <div className="flex flex-wrap justify-between gap-7 my-5">
            {/* CARD */}
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
            <Card
              bgcolor={"#FD6663"}
              title={"December"}
              subtitle={"14:23:52"}
            />
            <Card
              bgcolor={"#FCA201"}
              title={"Built Using"}
              subtitle={"React"}
            />
          </div>
          {/* ToDoContainer */}
            <ToDoContainer/>
          
        </div>
      </div>
    </>

    )
}
export default Landing