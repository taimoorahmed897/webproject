import React,{createContext, useState}  from "react";

import rice from "../Assets/rice.jpg"
import oats from "../Assets/oats.jpg"
import noodles from "../Assets/noodles.jpg"
import honey from "../Assets/honey.jpg"
import flour from "../Assets/flour.jpg"
import cookingoil from "../Assets/cooking oil.jpg"
import buscuitbundle from "../Assets/buscuitsbundle.jpg"
import beverage from "../Assets/beverage.jpg"
export const Productcontext = createContext();

const ProductcontextProvider =(props)=>{
    const[products]= useState([
        {id:1,name:'Rice',price:100,image:rice,status:'hot'},
        {id:2,name:'Oats',price:130,image:oats,status:'hot'},
        {id:3,name:'Noodles',price:40,image:noodles,status:'new'},
        {id:4,name:'Honey',price:300,image:honey,status:'hot'},
        {id:5,name:'Flour',price:100,image:flour,status:'hot'},
        {id:6,name:'Cooking oil',price:200,image:cookingoil,status:'hot'},
        {id:7,name:'Buscuits',price:50,image:buscuitbundle,status:'new'},
        {id:8,name:'Cold drink',price:100,image:beverage,status:'hot'},
    ])
 return(
    <Productcontext.Provider value={{products: [...products]}}>
        {props.children}
    </Productcontext.Provider>
 )

}

export default ProductcontextProvider;
