const TodoItem =(props)=>
{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    
    const handleDelete=(Delete)=>
    {
      let temparr = activityArr.filter((item)=>item.id !== Delete)
      setActivityArr(temparr)
        console.log(Delete)
    }
    return(
        <div className="flex justify-between">
           <p>{props.index+1}.{props.activity}</p>
          <button className="text-red-600" onClick={()=>{handleDelete(props.id)}}>Delete</button>
        </div>
          
    )
}
export default TodoItem