import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom';
import { updateStudent} from '../Redux/Actions/Actions'

const StudentsUpdate = () => {
  const myState=useSelector((state)=>state.updateStd);
  const dispatch=useDispatch();
const[data,setData]=useState({});
const navig=useNavigate();
const location=useLocation();

useEffect(()=>{
  const idx=location.state.index;
setData(
  myState[idx]
)

},[])

const handleData = (e) => {
  const name=e.target.id;
  const value=e.target.value;

  setData({...data,[name]:value})
}

const submit = (e) => {
  e.preventDefault();
  const idx=location.state.index;
  dispatch(updateStudent(data,idx));
  navig("/");
}


  return (
    <form className="mx-3"  onSubmit={submit}>
  <div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input onChange={handleData} value={data.name} type="text" className="form-control" id="name" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <label for="Standar" className="form-label">Standard</label>
    <input onChange={handleData} value={data.standard} type="text" className="form-control" id="standard" required/>
  </div>
  <div className="mb-3">
    <label for="Age" className="form-label">Age</label>
    <input onChange={handleData} value={data.age} type="text" className="form-control" id="age" required/>
  </div>
  <div className="mb-3">
    <label for="Email" className="form-label">Email</label>
    <input onChange={handleData} value={data.email} type="email" className="form-control" id="email" required/>
  </div>
  
  <button type="submit" className="btn btn-primary" style={{backgroundColor:"teal"}}>Update</button>
  <button className="btn btn-danger mx-2" onClick={()=>navig("/")}>Cancel</button>
 
</form>
  )
}

export default StudentsUpdate
