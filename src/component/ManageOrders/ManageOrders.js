import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const ManageOrders = () => {
    const err = "Not Given";
    const [status,setStatus] = useState("");
    const [order,setOrder] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch('https://dry-brook-16526.herokuapp.com/manageOrder')
        .then(res => res.json())
        .then(data => {
            setOrder(data);
            setStatus(data.status);
            console.log(data);
        })
    },[setStatus]);

    const deletehandler = (index) =>{
        console.log("click");
        console.log(order[index]);
        const pd = order[index];
        const id = pd._id;
        console.log(id);
        const confirm = window.confirm("Are you sure?")
        if(confirm){
            fetch(`https://dry-brook-16526.herokuapp.com/myOrder/${id}`,{
            method:"DELETE",
        }).then(res => res.json())
        .then(data =>{
            console.log(data);
            const remaining = order.filter(service => service._id !== id);
            setOrder(remaining);
        })
        };
        
    }
    const approveHandleButton = () => {
        setStatus("Approved");
}
    return (
        <div>
            <h3 className="text-dark text-center mt-5 mb-5">Total Items: {order.length}</h3>
            <div className="card-contain container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                order?.map((item,index) =>
                <div class="col">
                <div class="card w-75 ">
                        <div class="card-body  cart">
                             <div className="course-info d-flex justify-content-around my-3">
                                <h3 class="card-title ">{item.name}</h3>
                                
                             </div>
                             
                                
                             <div className="text-center">
                                 <h5>Name: {user.displayName}</h5>
                                 <h5>Email {user.email}</h5>
                                 <h6>Address: {user.address?user.address:err}</h6>
                                 <h6>Mobile: {user.mobile?user.mobile:err}</h6>
                             </div>

                             <div className="text-center">
                                 {
                                     status?<h6>{status}</h6>:<h6>{item.status}</h6>
                                 }
                             </div>
                             
                             <div className="container d-flex justify-content-around mt-4 mb-3">
                             <button onClick={approveHandleButton} className="btn btn-success">Approve</button>
                                 <button onClick={()=>deletehandler(index)}className="btn btn-outline-danger">Delete</button>
                                 
                             </div>
                        </div>
                 </div>
            </div>
                )
            }
            </div>
            </div>
        </div>
    );
};

export default ManageOrders;