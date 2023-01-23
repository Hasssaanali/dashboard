import React, { Fragment } from 'react'
import '../style.css';
import { Link,BrowserRouter } from "react-router-dom"


export default function Header() {

	return (
		<Fragment>
			
				<div className="row flex-nowrap">
					<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
						<div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
							<a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
								<img src="/fav.png" alt="" width="60" /><span className="fs-5 d-none d-sm-inline">The Anticod</span>
							</a>


							<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
								<li className="nav-item">
								<Link to="/" className='nav-link align-middle px-0'>
									<i className="fa fa-tachometer" aria-hidden="true"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
								</Link>
								</li>
								<li>
								<Link to="/homecontent" className='nav-link align-middle px-0'>
									<i className="fa fa-home" aria-hidden="true"></i><span className="ms-1 d-none d-sm-inline">Home Content</span>
								</Link>
								</li>
								<li>
								<Link to="/Blogs" className='nav-link align-middle px-0'>
									<i className="fa fa-rss" aria-hidden="true"></i><span className="ms-1 d-none d-sm-inline">Blogs</span></Link>
								</li>
								<li>
									<a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
									<i className="fa fa-briefcase" aria-hidden="true"></i> <span className="ms-1 d-none d-sm-inline">Services <i className="fa fa-chevron-down" aria-hidden="true"></i></span></a>
									<ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
										<li><Link to="/Web" className='nav-link align-middle px-0'><i className="fa fa-share" aria-hidden="true"></i> <span className="d-none d-sm-inline">Web Development</span></Link></li>
										<li><Link to="/Ui" className='nav-link align-middle px-0'><i className="fa fa-share" aria-hidden="true"></i> <span className="d-none d-sm-inline">UI/UX Design</span> 2</Link></li>
										<li><a href="#" className="nav-link px-0"><i className="fa fa-share" aria-hidden="true"></i> <span className="d-none d-sm-inline">SEO</span> 2</a></li>
										<li><a href="#" className="nav-link px-0"><i className="fa fa-share" aria-hidden="true"></i> <span className="d-none d-sm-inline">Video Animation</span> 2</a></li>
										<li><a href="#" className="nav-link px-0"><i className="fa fa-share" aria-hidden="true"></i> <span className="d-none d-sm-inline">Digital Marketing</span> 2</a></li>
									</ul>
								</li>
								<li>
									<a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
									<i className="fa fa-globe" aria-hidden="true"></i> <span className="ms-1 d-none d-sm-inline">Career's</span> </a>
								</li>
								<li>
									<a href="#" className="nav-link px-0 align-middle">
									<i className="fa fa-reply-all" aria-hidden="true"></i> <span className="ms-1 d-none d-sm-inline">Extra Content</span> </a>
								</li>
							</ul>


							<hr />
						</div>
					</div>

					
					
				</div>
			

		</Fragment>
	)
}
