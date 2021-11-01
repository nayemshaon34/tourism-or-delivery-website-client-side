import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name,image,description} = props.course;
    return (
        <div className="col card-contain">
        <div className="card">
            <img src={image} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body  cart">
                     <div className="course-info d-flex justify-content-around my-3">
                        <h4 className="card-title text-4xl">{name}</h4>
                        
                     </div>
                     <div className="d-flex justify-content-around my-2">
                     </div>
                     <div className="description">
                         {description}
                     </div>
                     <div className="container d-flex justify-content-around mt-4 mb-3">
                     <Link to="/tours"><button className="btn btn-outline-success">Book Now</button></Link>
                     </div>
                </div>
         </div>
    </div>
    );
};

export default Service;