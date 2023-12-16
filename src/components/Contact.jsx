import React, { useState } from 'react'
import {useParams} from "react-router-dom";

function Contact() {

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
    }

  return (
    <>
        <div className="col-lg-8">
            <div className='card'>
                <h4 className='card-header text-start'>Contact Details</h4>
                <div className="card-body">
                    <div className='imgDiv d-flex justify-content-center align-items-center'>
                        <i style={{fontSize: "100px"}} class="bi bi-person-circle"></i>
                    </div>
                    <div className="row mt-3">
                        <div class="col-4 form-floating mb-3">
                            <input disabled onChange={handleChange} name="name" value={contactData.name} type="text" class="form-control" id="name" required/>
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
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;