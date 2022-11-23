import React, { Fragment } from 'react'
import { useState } from 'react'
import Dashboardcomponen from '../Dashboardcomponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Addbanner() {

    const navigate = useNavigate();

    const [Heading, setHeading] = useState('');
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
            formData.append('text',Text);
            formData.append('image',image);
            toast("Banner Add Successfully");
            navigate('/homecontent'); 
        }

    }
  return (
    <Fragment>
        <Dashboardcomponen/>
        <div className='tabss'>
        <h2>Add Banner</h2>

        <form >
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input value={Heading} name="heading" type="text" className="form-control" id="inputEmail4" placeholder="Full Name" onChange={(e) => setHeading(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea value={Text} name='text' type="text" className="form-control" id="inputAddress2" placeholder="Text For Banner" onChange={(e) => setText(e.target.value)} />
                            </div>
                            <div className="form-group resume">
                                <input value={image} name="image" type="file" className="form-control" id="file" accept="jpg" placeholder="resume" onChange={(e) => setimage(e.target.value)} required />
                            </div>

                            <button onClick={SubmitDATA}>Add Banner</button>
                            <ToastContainer />

                        </form>
        </div>
    </Fragment>
  )
}
