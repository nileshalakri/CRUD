import {useState,useEffect} from "react";
import axios from 'axios';

export default function useAxios(apiPath)
{
    const[api,setApi]=useState([]);

    useEffect(()=>{
        axios.get(apiPath).then(res=>{
            setApi(res.data)
        })
    },[]);
    return api;
}