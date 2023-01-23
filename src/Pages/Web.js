import React, { Fragment } from 'react'
import Dashboardcomponen from '../Component/Dashboardcomponent'
import Webdevelopment from '../Component/Web/Webdevelopment'

export default function Webtabl() {
  return (
    <Fragment>
        <Dashboardcomponen/>
        <div className='tabss'>
            <Webdevelopment/>
        </div>
    </Fragment>
  )
}