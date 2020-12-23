import React,{createContext, useReducer}  from "react";

import {Cartreducer} from "./Cartreducer"
export const Cartcontext = createContext()

const Cartcontextprovider =(props)=>{
    const [cart, dispatch]= useReducer(Cartreducer, {shoppingcart:[],totalprice:0,qty:0})
    return(

    <Cartcontext.Provider value={{...cart,dispatch}}>
        {props.children}
    </Cartcontext.Provider>
)
}

export default Cartcontextprovider;