import './App.css';
import './style.css';
import { Fragment } from 'react';
import Header from './Component/Header';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './layout';


function App() {
  return (
    <Fragment>
      <div className='mypages'>
      <Header/>
      <Layout/>
      </div>
    </Fragment>
  );
}

export default App;
