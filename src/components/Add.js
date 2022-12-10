import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";


export default function Addusingreacthookform() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  


  let navigate = useNavigate();



  var myfunc=(data)=>{
    
   
    console.log(data);

    axios.post("http://localhost:3004/products",data).then(res=>{
      navigate("/homepage")
    })
  }

  return (
    <div className="container">
      <h1>ADD PRODUCT DATA</h1>
      <form onSubmit={handleSubmit(myfunc)}>
      <input type="text" placeholder='Product Title'{...register("title",{required: true,minLength:3})} className="form-control" />
      {errors.title?.type === 'required' && <p role="alert">title is required</p>}
      {errors.title?.type === 'minLength' && <p role="alert">title min is required</p>}
      <br />

      <input type="text" placeholder='Product Price' {...register("Price",{required: true,min:50})} className="form-control" />
      {errors.Price?.type === 'required' && <p role="alert">proper price is required</p>} 
      <br />
        
      <input type="text" placeholder='Product Description' {...register("description",{required: true,minLength:5,maxLength:100})} className="form-control" />
      <br />

      <select {...register("Price",{required: true,min:50})} className="form-control" >
        <option value="">Plese Select Category</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
      </select>
      <br />

      <input type="text" placeholder='Image' {...register("image",{required: true,minLength:5,maxLength:500})} className="form-control" />
      {errors.Image?.type === 'required' && <p role="alert">Image is required</p>} 

      <input type="submit"  />
      </form>

    </div>

  )
  }
