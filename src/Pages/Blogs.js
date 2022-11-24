import React, { Fragment } from 'react'
import Blogstable from '../Component/Blogs/Blogstable'
import Dashboardcomponen from '../Component/Dashboardcomponent'

export default function Blogs() {
  return (
    <Fragment>
        <Dashboardcomponen/>
        <div className='tabss'>
            <Blogstable/>
        </div>
    </Fragment>
  )
}
