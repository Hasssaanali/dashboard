import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { woocommerce } from '../../Data/Data';
import { Link } from "react-router-dom"


export default function Woobtable() {
  return (
    <Fragment>
    <div className='tab-pane'>
        <h2 className='article'>Woocommerce List </h2>
    <Table striped bordered hover size="sm">
         <thead>
           <tr>
             <th>Name</th>
             <th>Link</th>
             <th>Image</th>
             <th>Edit</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
         {woocommerce.map((data) => {
   return (
           <tr key={data.key}>
             <td><p className='mytext'>{data.name}</p></td>
             <td><p className='mytext'>{data.link}</p></td>
             <td><img className="d-block w-100" src={data.image} alt="Feature" /></td>
             <td><button className='transparent'>Edit</button></td>
             <td><button className='transparent'>Delete</button></td>
           </tr>
       )
   })}    
         </tbody>
       </Table>
       <div className='mybuton'><Link to="/Addwoo" className='addbtn'>Add Woo Portfolio</Link></div>

       </div>
       </Fragment>
  )
}
