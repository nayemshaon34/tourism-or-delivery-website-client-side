import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://dry-brook-16526.herokuapp.com/services',data)
          .then(res => {
            if(res.data.insertedId){
                alert("Added Succesfully");
                console.log(res);
                reset();
            }
            console.log(res);
          })
          
    }

    return (
        <div className="service-field">
            <h1 className="text-center mt-5 mb-4 text-success">Please Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="bg-light bg-gradient" {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name"/>
                <textarea className="bg-light bg-gradient" {...register("description",)}placeholder="Description"></textarea> {/* jokohon des boro hoi tokhon text area use korbo */}
                <input className="bg-light bg-gradient" {...register("image",)} placeholder="Image"/>
                <input className="btn btn-warning" type="submit" />
             </form>
        </div>
    );
};

export default AddService;