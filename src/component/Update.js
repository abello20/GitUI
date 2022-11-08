import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Label,
  Input,
}from 'reactstrap';

export const Update = () => {

  const urlPut ='http://localhost:8090/api/v1/update/'

  const [orderName, setOrderName] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();
  
  const data = {
    orderName: orderName,
    price: price,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(urlPut+id, data)
    .then(navigate("/"));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h1 >Update Order</h1>
      <p>Input New Data</p>
      <form className="w-[50%] h-full flex flex-col mt-2">
      <Label htmlFor="orderName">Order Name</Label>
        <Input
          value={data.orderName} 
          name='orderName' 
          id='orderName'
          onChange={(e) => setOrderName(e.target.value)}
          type="text"
          ></Input>
        <Label htmlFor="price">Price</Label>
        <Input
          value={data.price} 
          name='price' 
          id='price'
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          ></Input>
        
      </form>
      <Link type="submit" className="btn btn-success" style={{marginTop:"2rem"}}
          onClick={Update}
        >
          Update
      </Link>
      <Link className="btn btn-primary" style={{marginTop:"2rem"}} to="/"
        >
          Cancel
      </Link>
    </div>
  )
}
