import React from 'react'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editpro from './Editpro'
import Productdetail from './Productdetail'
import DeleteProduct from './DeleteProduct'
import Header from './Header'
import Add from './Add'



export default function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
    
    <Route path='/' element={<Login/>}/>
    <Route path='/homepage' element={<Home/>}/>
    <Route path="/add" element={<Add/>} />
    <Route path="/single-product/:productId" element={<Productdetail />} />
    <Route path="/deletePro/:productId" element={<DeleteProduct/>} />
    <Route path="/editPro/:productId" element={<Editpro/>} />
    </Routes>
    </BrowserRouter>
  )
}
