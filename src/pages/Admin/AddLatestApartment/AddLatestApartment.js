import React, { useRef } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AddLatestApartment = () => {
    const placeRef = useRef()
    const roomRef = useRef()
    const costRef = useRef()
    const apartmentTypeRef = useRef()
    const imageUrlRef = useRef()
    const shortDescriptionRef = useRef()



    const handleSubmitLatestApartment = e =>{
        const place = placeRef.current.value 
        const room = roomRef.current.value 
        const cost = costRef.current.value 
        const apartmentType = apartmentTypeRef.current.value 
        const image = imageUrlRef.current.value
        const shortDescription = shortDescriptionRef.current.value 

        const newLatestApartment = {place, room, cost, apartmentType, image, shortDescription}

        fetch('https://enigmatic-hollows-67176.herokuapp.com/latestApartment', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newLatestApartment) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Apartment Added Successfully')
            }
        })


        e.preventDefault()
    }

    return (
        <>
            <AdminNavbar></AdminNavbar>
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-warning text-center">Add Latest Apartment</h2>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">

                        <form onSubmit={handleSubmitLatestApartment}>

                                    <div className="form-group">
                                        <label>Place Name</label>
                                        <input type="text" className="form-control" ref={placeRef} />    
                                    </div>
                                    <div className="form-group">
                                        <label>No of Rooms</label>
                                        <input type="text" className="form-control" ref={roomRef} />    
                                    </div>
                                    <div className="form-group">
                                        <label>Cost</label>
                                        <input type="text" className="form-control" ref={costRef} />    
                                    </div>
                                    <div className="form-group">
                                        <label>Apartment Type</label>
                                        <select class="form-control" ref={apartmentTypeRef}>
                                        <option>For Rent</option>
                                        <option>For Sell</option>
     
                                        </select>   
                                    </div>
                                    <div className="form-group">
                                        <label>Image URL</label>
                                        <input type="text" className="form-control" ref={imageUrlRef} />    
                                    </div>
                                    <div className="form-group">
                                        <label>Short Description </label>
                                        <textarea class="form-control" ref={shortDescriptionRef} rows="3"></textarea>
                                    </div>
                                
                                    <button type="submit" className="btn btn-primary">Submit</button>
                         </form>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                    </div>
            </section>
        </>
    );
};

export default AddLatestApartment;