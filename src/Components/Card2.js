import React from 'react'

const Card2 = (props) => {
  return (
<div className="card" style={{border:"1px solid rgba(0,0,0,0.5)"}}>
  <div className="card-body">
    <p className="card-text">Name:{props.name}</p>
    <p className="card-text">Subject:{props.subject}</p>
    <p className="card-text">Age:{props.age}</p>
    <p className="card-text">Email:{props.email}</p>

    <p className='position-absolute bottom-0 end-0'>
    <button id={props.id} className="btn btn-outline-success btn-sm" onClick={props.update} name={props.id}>Update</button>
    <button id={props.id} className="btn btn-outline-danger btn-sm mx-2" onClick={props.delete} name={props.id}>Delete</button>
    </p>
  </div>
</div>
  )
}

export default Card2
