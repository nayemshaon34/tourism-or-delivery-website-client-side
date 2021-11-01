import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
        const [tour,setTour] = useState([]);
        useEffect(()=>{
            fetch('https://dry-brook-16526.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTour(data))
        },[])
        
        
        console.log(tour);
    return (
        <div className="card-contain">
        {
            tour.length===0? <div className="text-center mt-3"><Spinner animation="border" /></div>:<h1 className="text-center text-success mt-5">Our Packages</h1>
        }

            
                <div className="card-contanier">
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-lg-5 mt-1">
                      {
                          tour.map(tour => <Service
                            course={tour}
                            key={tour._id}
                            ></Service>)
                      }      
                </div>
            </div> 
                    
        </div>
    );
};

export default Services;