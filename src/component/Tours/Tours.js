import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import './Tours.css'

const Details = () => {
    const {user} = useAuth();

    const [packages,setPackages] = useState([]);
        useEffect(()=>{
            fetch('https://dry-brook-16526.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setPackages(data))
        },[]);


        const handleAddOrder = id => {
            const data = packages[id];
            console.log(id);
            data.email= user.email;
            data.status = "pending";
            console.log(data);
            fetch('https://dry-brook-16526.herokuapp.com/addOrder',{
                method:"POST",
                headers:{"content-type": "application/json"},
                body: JSON.stringify(data),
            })
        }
    return (
        <div>
            <Banner></Banner>
            <div className="div mt-5 mb-5">
                <h1 className="text-center">Explore the World for Yourself:</h1>
            </div>
             <div className="card-contain container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                      {
                          packages.map((tour,index) => 
                            <div class="col">
                                <div class="card">
                                    <img src={tour.image} class="card-img-top img-fluid" alt="..."/>
                                        <div class="card-body  cart">
                                             <div className="course-info d-flex justify-content-around my-3">
                                                <h4 class="card-title ">{tour.name}</h4>
                                                
                                             </div>
                                             
                                                
                                             <div className="description">
                                                 {tour.description}
                                             </div>
                                             <div className="container d-flex justify-content-around mt-4 mb-3">
                                                 <button onClick={() => handleAddOrder(index)} className="btn btn-outline-success">Book Now</button>
                                                 
                                             </div>
                                        </div>
                                 </div>
                            </div>)
                      }      
                </div>
            </div>
        </div>
    );
};

export default Details;