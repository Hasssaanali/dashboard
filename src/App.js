import './App.css';
import './style.css';
import { Fragment ,useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Component/Header';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Pages/dashboard';
import Homecontent from './Pages/homecontent';
import AOS from "aos";
import Preloader from './Component/Preloader';
import Addbanner from './Component/Homedata/Addbanner';
import Addservice from './Component/Homedata/Addservice';
import Addreview from './Component/Homedata/Addreview';
import Blogs from './Pages/Blogs';
import Addblogs from './Component/Blogs/Addblogs';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, [])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Fragment>
       {loading ? <Preloader/> : <>
      <BrowserRouter>
      <div className='mypages'>
        <Header/>

        <div className="col py-3 myheaderbar">
        <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="homecontent" element={<Homecontent/>} />
        <Route exact path="Addbanner" element={<Addbanner/>} />
        <Route exact path="Addservice" element={<Addservice/>} />
        <Route exact path="Addreview" element={<Addreview/>} />
        <Route exact path="Blogs" element={<Blogs/>} />
        <Route exact path="Addblogs" element={<Addblogs/>} />
        </Routes>
        </div>


      </div>
      </BrowserRouter>
      </>
}
    </Fragment>
  );
}

export default App;
