import React, { Fragment } from 'react'
import { useState } from 'react'
import Dashboardcomponen from '../Dashboardcomponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Addblogs() {

    const navigate = useNavigate();

    const [Heading, setHeading] = useState('');
    const [Excerpt, setExcerpt] = useState('');
    const [Author, setAuthor] = useState('');
    const [Content, setContent] = useState('');
    const [avatar, setavatar] = useState('');
    const [image, setimage] = useState('');

  

    

    const SubmitDATA = (e) => {
        e.preventDefault();
        if(Heading === ''){
            toast("Kindly Fill The Heading Fields");
        }
        else{
            const formData = new FormData;
            formData.append('heading',Heading);
            formData.append('excerpt',Excerpt);
            formData.append('author',Author);
            formData.append('content',Content);
            formData.append('avatar',avatar);
            formData.append('image',image);
            toast("Article Add Successfully");
            navigate('/blogs'); 
        }

    }
  return (
    <Fragment>
        <Dashboardcomponen/>
        <div className='tab-panea'>
        <div className='tabss'>
        <h2>Add New Article</h2>

        <form >
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input value={Heading} name="heading" type="text" className="form-control" id="inputEmail4" placeholder="Heading" onChange={(e) => setHeading(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input value={Excerpt} name="excerpt" type="text" className="form-control" id="inputEmail4" placeholder="excerpt" onChange={(e) => setExcerpt(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input value={Author} name="author" type="text" className="form-control" id="inputEmail4" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea value={Content} name='content' type="text" className="form-control" id="inputAddress2" placeholder="Content" onChange={(e) => setContent(e.target.value)} />
                            </div>
                            <div className="form-group resume">
                            <label><b>Author Image *</b></label>
                                <input value={avatar} name="avatar" type="file" className="form-control" id="file" accept="jpg" placeholder="Avatar" onChange={(e) => setavatar(e.target.value)} required />
                            </div>
                            <div className="form-group resume">
                            <label><b>Feature Image *</b></label>
                                <input value={image} name="image" type="file" className="form-control" id="file" accept="jpg" placeholder="resume" onChange={(e) => setimage(e.target.value)} required />
                            </div>

                            <button onClick={SubmitDATA}>Add Article</button>
                            <ToastContainer />

                        </form>
        </div>
        </div>
    </Fragment>
  )
}
