import React, { Fragment } from 'react'
import { useState } from 'react'
import Dashboardcomponen from '../Dashboardcomponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Addwooo() {

    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [Link, setLink] = useState('');
    const [image, setimage] = useState('');

  

    

    const SubmitDATA = (e) => {
        e.preventDefault();
        if(Name === ''){
            toast("Kindly Fill The Heading Fields");
        }
        else{
            const formData = new FormData;
            formData.append('name',Name);
            formData.append('link',Link);
            formData.append('image',image);
            toast("Web Add Successfully");
            navigate('/Wixtable'); 
        }

    }
  return (
    <Fragment>
        <Dashboardcomponen/>
        <div className='tab-panea'>
        <div className='tabss'>
        <h2>Add Wix Portfolio</h2>

        <form >
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input value={Name} name="name" type="text" className="form-control" id="inputEmail4" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input value={Link} name="link" type="text" className="form-control" id="inputEmail4" placeholder="URL Here" onChange={(e) => setLink(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group resume">
                            <label><b>Feature Image *</b></label>
                                <input value={image} name="image" type="file" className="form-control" id="file" accept="jpg" placeholder="resume" onChange={(e) => setimage(e.target.value)} required />
                            </div>

                            <button onClick={SubmitDATA}>Add Now</button>
                            <ToastContainer />

                        </form>
        </div>
        </div>
    </Fragment>
  )
}
