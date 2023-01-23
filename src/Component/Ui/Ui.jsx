import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { uiux } from '../../Data/Data';
import { Link } from "react-router-dom"


export default function UItable() {
  return (
    <Fragment>
    <div className='tab-pane'>
        <h2 className='article'>UI/UX List </h2>
    <Table striped bordered hover size="sm">
         <thead>
           <tr>
             <th>Image</th>
             <th>Edit</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
         {uiux.map((data) => {
   return (
           <tr key={data.key}>
             <td><img className="d-block w-100" src={data.image} alt="Feature" /></td>
             <td><button className='transparent'>Edit</button></td>
             <td><button className='transparent'>Delete</button></td>
           </tr>
       )
   })}    
         </tbody>
       </Table>
       <div className='mybuton'><Link to="/Addui" className='addbtn'>Add UI/UX Portfolio</Link></div>

       </div>
       </Fragment>
  )
}
