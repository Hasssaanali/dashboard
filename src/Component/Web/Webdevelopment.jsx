import React, { Fragment } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Webtable from './Webtable';
import Woobtable from './Wootable';


export default function Webdevelopment() {
  return (
<Fragment>
  <div className='tabss'>
<Tabs defaultActiveKey="banner"  id="justify-tab-example"  className="mb-3" justify >
      <Tab eventKey="banner" title="Wordpress">
        <Webtable/>
      </Tab>
      <Tab eventKey="woocommerce" title="Woocommerce">
      <Woobtable/>
      </Tab>
      <Tab eventKey="react" title="React">
 
      </Tab>
      <Tab eventKey="wix" title="Wix">
      
      </Tab>
      <Tab eventKey="shopify" title="Shopify">
      
      </Tab>
    </Tabs>
    </div>
</Fragment>  
)
}
