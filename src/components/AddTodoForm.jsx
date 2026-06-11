import { useState } from "react";
const AddTodoForm = (props) => {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity,setNewActivity] = useState("")

    const handleChange=(evt)=>
    {
      setNewActivity(evt.target.value)
    }
    const handleAdd=()=>
    {
       setActivityArr([...activityArr,{id:activityArr.length+1, activity:newActivity}])
        setNewActivity([])
    }
  return(
    <div className="flex flex-col gap-3">
    <h1 className="font-medium text-2xl">Manage Activities</h1>
    <div>
      <input value={newActivity} type="text" onChange={handleChange} className="p-1 border border-black bg-transparent" placeholder="Next Activity?"></input>
      <button onClick={handleAdd} className="bg-black text-white p-1 border border-black">Add</button>
    </div>
  </div>
  ) 
};
export default AddTodoForm;
