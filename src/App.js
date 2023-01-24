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
import Web from './Pages/Web';
import Addblogs from './Component/Blogs/Addblogs';
import Addweb from './Component/Web/Addweb';
import Addwooo from './Component/Web/Webtable';
import Addui from './Component/Ui/Addui';
import Ui from './Pages/Ui';
import Woobtable from './Component/Web/Wootable';
import Addwoo from './Component/Web/Addwoo';
import Reacttable from './Component/Web/Reacttable';
import Addreact from './Component/Web/Addreact';
import Wixtable from './Component/Web/Wixtable';
import Addwix from './Component/Web/Addwix';
import Shopifytable from './Component/Web/Shopifytable';
import Addshopify from './Component/Web/Addshopify';

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
        <Route exact path="Web" element={<Web/>} />
        <Route exact path="Addweb" element={<Addweb/>} />
        <Route exact path="Wootable" element={<Woobtable/>} />
        <Route exact path="Addwoo" element={<Addwoo/>} />
        <Route exact path="Reacttable" element={<Reacttable/>} />
        <Route exact path="Addreact" element={<Addreact/>} />
        <Route exact path="Wixtable" element={<Wixtable/>} />
        <Route exact path="Addwix" element={<Addwix/>} />
        <Route exact path="Shopifytable" element={<Shopifytable/>} />
        <Route exact path="Addshopify" element={<Addshopify/>} />
        <Route exact path="Addui" element={<Addui/>} />
        <Route exact path="Ui" element={<Ui/>} />
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
