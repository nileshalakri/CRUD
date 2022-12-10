import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Productdetail() {
  const [rec, setRec] = useState({});

  let { productId } = useParams(); //Object { productId: "1" }
  console.log("IN SINGLE PRODUCT COMP");
  console.log(productId);

  useEffect(() => {
    axios.get("http://localhost:3004/products/" + productId).then((res) => {
      console.log(res);
      console.log(res.data);

      setRec(res.data);
    });
  });

  return (
    <div class="container ">
      <div class="col-sm-5">
        <div >
          <img src={rec.image} alt="" />
        </div>
      </div>
      <div class="col-sm-7">
        <div >
          
          <h2>{rec.title}</h2>
          <p>Web ID: 1089772</p>
          
          <span>
            <span>US {rec.price}</span>
            <label>Quantity:</label>
            <input type="text" value="3" />
            <button type="button" class="btn btn-fefault cart">
              
              Add to cart
            </button>
            <Link to={"/deletePro/" + rec.id} class="btn btn-fefault cart">
              
              Delete
            </Link>
            <Link to={"/editPro/" + rec.id} class="btn btn-fefault cart">
              
              Edit
            </Link>
          </span>
          <p>
            <b>Availability:</b> In Stock
          </p>
          {/*<p><b>Stock:</b>{rec.rating.count}</p>
  								<p><b>Rating:</b>{rec.rating.rate}</p>*/}
          <p>
            <b>Category:</b>
            {rec.category}
          </p>
          <p>{rec.description}</p>
          <p>
            <b>Condition:</b> New
          </p>
          <p>
            <b>Brand:</b> E-SHOPPER
          </p>
          
        </div>
      </div>
    </div>
  );
}
