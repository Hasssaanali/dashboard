import React from 'react'



export default function Dashboardcomponen() {
// date
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
// time
  const current1 = new Date();
  const time = current1.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
// search

// console.log(time);
  return (



      <div className='container-fluid'>
        <div className='row'>
						<div className='col-sm-6 clock'>
              <h2>Dashboard Overview</h2>
              <h3>{time} at {date} </h3>
            </div>

            <div className='col-sm-4 search'>
              <form method="post">
                <input type="text" className="textbox" placeholder="Search" />
                <input title="Search" value="" type="submit" className="button" />
              </form>
            </div>

            <div className='col-sm-2 search'>
            <div className="dropdown">
								<a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
									<img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
									<span className="d-none d-sm-inline mx-1">loser</span>
								</a>
								<ul className="dropdown-menu dropdown-menu-dark text-small shadow">
									<li><a className="dropdown-item" href="#">New project...</a></li>
									<li><a className="dropdown-item" href="#">Settings</a></li>
									<li><a className="dropdown-item" href="#">Profile</a></li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li><a className="dropdown-item" href="#">Sign out</a></li>
								</ul>
							</div>
            </div>
        </div>
      </div>




  )
}
