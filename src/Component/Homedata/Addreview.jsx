import React, { Fragment } from 'react'
import { useState } from 'react'
import Dashboardcomponen from '../Dashboardcomponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Addreview() {
    const navigate = useNavigate();

    const [Heading, setHeading] = useState('');
    const [Company, setCompany] = useState('');
    const [Text, setText] = useState('')
    const [image, setimage] = useState('')

  

    

    const SubmitDATA = (e) => {
        e.preventDefault();
        if(Heading === ''){
            toast("Kindly Fill The Heading Fields");
        }
        else{
            const formData = new FormData;
            formData.append('heading',Heading);
            formData.append('company',Company);
            formData.append('text',Text);
            formData.append('image',image);
            toast("Service Add Successfully");
            navigate('/homecontent'); 
        }

    }
  return (
    <Fragment>
        <Dashboardcomponen/>
        <div className='tabss'>
        <h2>Add New Service</h2>

        <form >
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input value={Heading} name="heading" type="text" className="form-control" id="inputEmail4" placeholder="Heading" onChange={(e) => setHeading(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input value={Company} name="company" type="text" className="form-control" id="inputEmail4" placeholder="Company" onChange={(e) => setCompany(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea value={Text} name='text' type="text" className="form-control" id="inputAddress2" placeholder="Text For Banner" onChange={(e) => setText(e.target.value)} />
                            </div>
                            <div className="form-group resume">
                                <input value={image} name="image" type="file" className="form-control" id="file" accept="jpg" placeholder="resume" onChange={(e) => setimage(e.target.value)} required />
                            </div>

                            <button onClick={SubmitDATA}>Add Review</button>
                            <ToastContainer />

                        </form>
        </div>
    </Fragment>
  )
}
