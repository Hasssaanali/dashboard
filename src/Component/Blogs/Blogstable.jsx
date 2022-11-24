import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { articles } from '../../Data/Data';
import { Link } from "react-router-dom"

export default function Blogstable() {
  return (
    <Fragment>
    <div className='tab-pane'>
        <h2 className='article'>Article List</h2>
    <Table striped bordered hover size="sm">
         <thead>
           <tr>
             <th>No</th>
             <th>Heading</th>
             <th>Excerpt</th>
             <th>Content</th>
             <th>Author</th>
             <th>Avatar</th>
             <th>Image</th>
             <th>Edit</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
         {articles.map((data) => {
   return (
           <tr key={data.key}>
             <td>{data.key}.</td>
             <td><p className='mytext'>{data.heading}</p></td>
             <td><p className='mytext'>{data.excerpt}</p></td>
             <td><p className='mytext'>{data.content}</p></td>
             <td><p className='mytext'>{data.Author}</p></td>
             <td><img className="d-block w-100" src={data.avatar} alt="Avatar" /></td>
             <td><img className="d-block w-100" src={data.feature} alt="Feature" /></td>
             <td><button className='transparent'>Edit</button></td>
             <td><button className='transparent'>Delete</button></td>
           </tr>
       )
   })}    
         </tbody>
       </Table>
       <div className='mybuton'><Link to="/Addblogs" className='addbtn'>Add Article</Link></div>

       </div>
       </Fragment>
  )
}
