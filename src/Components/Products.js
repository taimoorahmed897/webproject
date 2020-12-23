import React,{useContext} from 'react';
import {Productcontext} from "../Global/Productcontext"
import Banner from "./Banner"
import {Cartcontext} from "../Global/Cartcontext"
const Products =()=>{
    const {products} = useContext( Productcontext)
    const data = useContext(Cartcontext)
  console.log(data)
    return(
        <div className="container">
            <Banner/>
        <div className="products">
            {products.map((product)=>
            (
                <div className="product" key={product.id}>
                   
                    <div className="product_img">
                        <img src={product.image} alt ="not found" />
                        
                    </div>
                    <div className="product_details">
                        <div className="product_name">
                            {product.name}
                        </div>
                        <div className="product_price">
                        RS{product.price}.00
                        </div>
                        </div>
                       
                    
                    <div className="addtocart">
                        Add to cart
                    </div>
                    {product.status==='hot' ? <div className="hot">Hot</div> : ''}
                    {product.status==='new' ? <div className="new">New</div> : ''} 
                </div>
            ))}
        </div>
       </div>

    )
}

export default Products;