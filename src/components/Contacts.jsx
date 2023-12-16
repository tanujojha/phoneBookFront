import React, { useEffect, useState } from 'react'
import { apiBaseURL } from '../general';
import axios from "axios";

function Contacts() {

    const [isLoading, setIsLoading] = useState(true);
    const [contacts, setContacts] = useState([]);

    // Loadar Component
    function Loading() {
        return (<div class="spinner-grow text-primary" role="status"></div>);
    };

    const fetchContacts = async()=>{
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiBaseURL}/contacts`);

            console.log(res);
            if(res.data.status === 1){
                setContacts(res.data.data);
            }
            
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false)
        }
    };

    useEffect(()=>{
        fetchContacts();
    }, [])


  return (
    <>
        <div className="col-lg-4">
            <div className='contactsMain'>
                <div className='card'>
                    <div className='card-header d-flex justify-content-between'>
                        <h4 className='text-start'>Contacts</h4>
                        <i class="bi bi-node-plus fs-3"></i>
                    </div>
                    {
                        isLoading ? <Loading/>
                        :
                        contacts.map((contact)=>{
                            return(
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='contactDiv d-flex gap-2 align-items-center'>
                                            <i class="fs-3 bi bi-person-circle"></i>
                                            <h5 className='card-text'>{contact.name}</h5>
                                        </div>
                                        <div className='actionDiv d-flex justify-content-end gap-4'>
                                            <i class="bi bi-telephone-outbound"></i>
                                            <i class="bi bi-pen"></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacts