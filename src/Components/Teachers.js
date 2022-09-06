import React from 'react'
import Card2 from './Card2'
import {useSelector,useDispatch} from "react-redux"
import {delTeacher} from '../Redux/Actions/Actions'
import { useNavigate } from 'react-router-dom'


const Teachers = () => {
  const myState=useSelector((state)=>state.updateTch);
  const dispatch=useDispatch();
  const navig=useNavigate()

  const update = (e) => {
    const index=parseInt(e.target.id)
    navig(`/teachers/update`,{state:{index:index}});
  }

  const del = (e) => {
    const index=parseInt(e.target.id)
    dispatch(delTeacher(index));
  }
  

  return (
    <>
    <div className="text-center"><button type="button" className="btn btn-block w-50 my-2" style={{backgroundColor:"teal",color:"white"}} onClick={()=>navig("/teachers/add")}>Add New</button></div>

    <div className="container">
  <div className="row gy-2">
  {myState.map((val,i)=>{
  return(<div key={i} className='col col-sm-6'><Card2 id={i} name={val.name} age={val.age} subject={val.subject} email={val.email} update={update} delete={del}/></div>)
})}
  </div>
</div>
    </>
  )
}

export default Teachers
