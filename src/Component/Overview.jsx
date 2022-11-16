import React, { Fragment } from 'react'

export default function Overview() {
  return (
   <Fragment>
    <div className='container-fluid marg'>
        <div className='row'>
            <div className='col-sm-3 overviews'>
                <h2>Web Development</h2>
                <h3>Portfolio : 14 item's</h3>
                <p>Last Update : 15/11/2022</p>
            </div>

            <div className='col-sm-3 overviews'>
                <h2>UI/UX Design</h2>
                <h3>Portfolio : 14 item's</h3>
                <p>Last Update : 5/11/2022</p>
            </div>

            <div className='col-sm-3 overviews'>
                <h2>SEO </h2>
                <h3>Portfolio : 8 item's</h3>
                <p>Last Update : 8/11/2022</p>
            </div>

            <div className='col-sm-3 overviews'>
                <h2>Video Animation</h2>
                <h3>Portfolio : 11 item's</h3>
                <p>Last Update : 21/09/2022</p>
            </div>

            <div className='col-sm-3 overviews'>
                <h2>Digital Marketing</h2>
                <h3>Portfolio : 6 item's</h3>
                <p>Last Update : 15/11/2022</p>
            </div>

            <div className='col-sm-3 overviews'>
                <h2>Articles</h2>
                <h3>Published : 9</h3>
                <p>Last Update : 25/10/2022</p>
            </div>

            <div className='col-sm-3 overviews'>
                <h2>Career Job's</h2>
                <h3>Total job's : 14</h3>
                <p>Last Update : 14/10/2022</p>
            </div>
        </div>
    </div>  
   </Fragment>
  )
}
