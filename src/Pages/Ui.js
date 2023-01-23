import React, { Fragment } from 'react'
import Webtable from '../Component/Ui/Ui'
import Dashboardcomponen from '../Component/Dashboardcomponent'

export default function Webtabl() {
  return (
    <Fragment>
        <Dashboardcomponen/>
        <div className='tabss'>
            <Webtable/>
        </div>
    </Fragment>
  )
}