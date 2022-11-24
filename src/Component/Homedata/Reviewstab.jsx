import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { reviews } from '../../Data/Data';
import { Link } from 'react-router-dom';

export default function Reviewstab() {
  return (
    <Fragment>
    <Table striped bordered hover size="sm">
         <thead>
           <tr>
             <th>No</th>
             <th>Heading</th>
             <th>Company Name</th>
             <th>Text</th>
             <th>Image</th>
             <th>Edit</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
         {reviews.map((data) => {
   return (
           <tr key={data.key}>
             <td>{data.key}.</td>
             <td>{data.heading}</td>
             <td>{data.company}</td>
             <td><p className='mytext'>{data.text}</p></td>
             <td><img className="d-block w-100" src={data.image} alt="First slide" /></td>
             <td><button className='transparent'>Edit</button></td>
             <td><button className='transparent'>Delete</button></td>
           </tr>
       )
   })}    
         </tbody>
       </Table>
       <div className='mybuton'><Link to="/Addreview" className='addbtn'>Add Review</Link></div>
       </Fragment>
  )
}
