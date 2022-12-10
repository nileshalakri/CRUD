import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export default function Editpro() {
    var [record,setRecord]=useState({});
    var {productId}=useParams();
    var navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3004/products/"+productId)
        .then(res=>{
            console.log(res.data);  
            setRecord(res.data)
        })
    },[]);
    
    var myfunc1=(ev)=>{
        console.log(ev.target.value);
        console.log(record);
        setRecord({...record,title:ev.target.value})
    }
    var myfunc2=(ev)=>{
        console.log(ev.target.value);
        console.log(record);
        setRecord({...record,price:ev.target.value})
    }
    var myfunc3=(ev)=>{
        console.log(ev.target.value);
        console.log(record);
        setRecord({...record,category:ev.target.value})
    }
    var myfunc4=(ev)=>{
        console.log(ev.target.value);
        console.log(record);
        setRecord({...record,image:ev.target.value})
    }
    var myfunc5=(ev)=>{
        console.log(ev.target.value);
        console.log(record);
        setRecord({...record,description:ev.target.value})
    }

    var myfunc =(ev)=>{
        console.log(ev.target.value);
        console.log(ev.target.name);
        var x1 =ev.target.name;
        setRecord({...record,[x1]:ev.target.value})
    }

    var onsubmit = (ev)=>{
        ev.preventDefault();
        //alert(1)
        console.log(record);
        
        axios
        .put('http://localhost:3004/products/'+productId,record)
        .then((res)=>{
            //console.log("product update");
            //console.log(res);
            navigate("/homepage"); //redirect
        })
    }
    
  return (
    <div className="container">
    <h1>Edit Product</h1>
    <form onSubmit={onsubmit}>
    <input type="text" name='title' onChange={myfunc1} value={record.title} className="form-control" /> <br />
    <input type="text" name='price' onChange={myfunc2} value={record.price} className="form-control" /> <br />
    <input type="text" name='category' onChange={myfunc3} value={record.category} className="form-control" /> <br />
    <input type="text" name='image' onChange={myfunc4} value={record.image} className="form-control" /> <br />
    <textarea name='description' onChange={myfunc5} value={record.description}></textarea> <br />
    <button>Update</button>
    </form>
    </div>
    
  )
}
