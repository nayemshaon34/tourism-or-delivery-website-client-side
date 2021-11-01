import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";

const YourOrder = () => {
    const [order,setOrder] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`https://dry-brook-16526.herokuapp.com/myOrder/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setOrder(data);
        })
    },[]);

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        user.address= data.Address;
        user.mobile= data.Mobile;
        console.log(user);
        reset();
          
    }

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
        }
    }

    console.log(order);
    return (
        <div>
            <h5 className="text-center mt-5 text-success">Welcome {user.displayName}</h5>
            <h6 className="text-center ">Email: {user.email}</h6>
            <h3 className="text-dark text-center mt-5 mb-5">Total Items: {order.length}</h3>
            <div className="card-contain container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                order?.map((item,index) =>
                <div class="col">
                <div class="card w-75 ">
                    <img src={item.image} class="card-img-top img-fluid mx-auto" alt="..."/>
                        <div class="card-body  cart">
                             <div className="course-info d-flex justify-content-around my-3">
                                <h4 class="card-title ">{item.name}</h4>
                                
                             </div>
                             
                                
                             <div className="description">
                                 {item.description}
                             </div>
                             <div className="container d-flex justify-content-around mt-4 mb-3">
                                 <button onClick={()=>deletehandler(index)}className="btn btn-outline-danger">Delete</button>
                                 
                             </div>
                        </div>
                 </div>
            </div>
                )
            }
            </div>
            </div>
            <div className="service-field">
            <h1 className="text-center mt-5 mb-4 text-success">Please Add Your Information</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <textarea className="bg-light bg-gradient" {...register("Address",)}placeholder="Address"></textarea> {/* jokohon des boro hoi tokhon text area use korbo */}
                <textarea className="bg-light bg-gradient" {...register("Mobile",)}placeholder="Mobile Number"></textarea> 
                <input className="btn btn-warning" type="submit" />
             </form>
        </div>
        </div>
    );
};

export default YourOrder;