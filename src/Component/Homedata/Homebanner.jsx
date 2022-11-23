import React, { Fragment } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Bannertable from "./Bannertable"
import Reviewstab from './Reviewstab';
import Servicetab from './Servicetab';


export default function homeservices() {
  return (
<Fragment>
  <div className='tabss'>
<Tabs defaultActiveKey="banner"  id="justify-tab-example"  className="mb-3" justify >
      <Tab eventKey="banner" title="Banner">
        <Bannertable/>
      </Tab>
      <Tab eventKey="services" title="Services">
      <Servicetab/>
      </Tab>
      <Tab eventKey="reviews" title="Reviews">
      <Reviewstab/>
      </Tab>
    </Tabs>
    </div>
</Fragment>  
)
}
