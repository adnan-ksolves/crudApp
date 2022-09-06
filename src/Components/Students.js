import React from 'react'
import Card1 from './Card1'
import {useSelector,useDispatch} from "react-redux"
import {delStudent} from '../Redux/Actions/Actions'
import { useNavigate } from 'react-router-dom'


const Students = () => {
  const myState=useSelector((state)=>state.updateStd);
  const dispatch=useDispatch();
  const navig=useNavigate()

  const update = (e) => {
    const index=parseInt(e.target.id)
    navig(`/update`,{state:{index:index}});
  }

  const del = (e) => {
    const index=parseInt(e.target.id)
    dispatch(delStudent(index));
  }
  

  return (
    <>
    <div className="text-center"><button type="button" className="btn btn-block w-50 my-2" style={{backgroundColor:"teal",color:"white"}} onClick={()=>navig("/add")}>Add New</button></div>

    <div className="container">
  <div className="row gy-2">
  {myState.map((val,i)=>{
  return(<div key={i} className='col col-sm-6'><Card1 id={i} name={val.name} age={val.age} email={val.email} std={val.standard} update={update} delete={del}/></div>)
})}
  </div>
</div>
    </>
  )
}

export default Students
