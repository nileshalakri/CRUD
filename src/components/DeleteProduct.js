import React,{useEffect} from 'react'
import axios from 'axios';
import{useParams,useNavigate} from 'react-router-dom';

export default function DeleteProduct() {
    let params=useParams();
    // console.log(params);
    // console.log(params.productId);

    let navigate=useNavigate();
    useEffect(()=>{
        console.log('Do Delete',params.productId);

        axios
        .delete('http://localhost:3004/products/'+params.productId)
        .then((res)=>{
            console.log("Product Deleted");
            console.log(res);
            navigate("/homepage");//redirect
        })
    },[])
  return (
    <div>DeleteProduct</div>
  )
}
