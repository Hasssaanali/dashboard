import React, { Fragment } from 'react'
import Dashboardcomponent from './Component/Dashboardcomponent'
import Overview from './Component/Overview'
import { BrowserRouter,  Routes, Route } from "react-router-dom"
import Dashboard from './Pages/dashboard'

export default function layout() {
  return (
   <Fragment>
    <div className="col py-3 myheaderbar">

    <BrowserRouter>
        <Dashboardcomponent/>

        <Routes>
        <Route path="/" element={ <Dashboard />} />
        </Routes>
        
    </BrowserRouter>

    </div>
   </Fragment>
  )
}
