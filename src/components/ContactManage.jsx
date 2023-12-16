import axios from 'axios';
import React, { useState } from 'react'
import {Navigate, useNavigate, useParams} from "react-router-dom";
import { apiBaseURL } from '../general';

function ContactManage() {
    const navigate = useNavigate();
    const {contactID} = useParams();
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        number: "",
        address: "",

    });

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setContactData((prev)=> ({...prev, [name]: value}));
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {

            const res = await axios.post(`${apiBaseURL}/contact`, contactData);
            console.log(res);
            if(res.data.status === 1){
                navigate(`/contact/${res.data.data._id}`)
            }
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <div className="col-lg-8">
            <div className='card'>
                <h4 className='card-header text-start'>{contactID ? "Edit" : "Add"} Contact</h4>
                <div className="card-body">
                    <div className='imgDiv d-flex justify-content-center align-items-center'>
                        <i style={{fontSize: "100px"}} class="bi bi-person-circle"></i>
                    </div>
                    <form onSubmit={handleSubmit} className='mt-3'>
                        <div className="row">
                                <div class="col-4 form-floating mb-3">
                                    <input onChange={handleChange} name="name" value={contactData.name} type="text" class="form-control" id="name" required/>
                                    <label for="name"><span className='text-danger'>*</span>Name</label>
                                </div>
                                <div class="col-4 form-floating mb-3">
                                    <input onChange={handleChange} name="number" value={contactData.number} type="text" class="form-control" id="number" required/>
                                    <label for="number"><span className='text-danger'>*</span>Phone Number</label>
                                </div>
                                <div class="col-4 form-floating mb-3">
                                    <input onChange={handleChange} name="email" value={contactData.email} type="text" class="form-control" id="email"/>
                                    <label for="email">Email</label>
                                </div>
                                <div class="col-12 form-floating mb-3">
                                    <input onChange={handleChange} name="address" value={contactData.address} type="text" class="form-control" id="address"/>
                                    <label for="address">Address</label>
                                </div>

                                <div className='d-flex justify-content-end'>
                                    <button className='btn w-25 btn-sm btn-outline-primary'>Add</button>
                                </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactManage;