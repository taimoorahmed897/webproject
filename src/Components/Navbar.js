import React  from "react";
import{Link} from "react-router-dom"

const Navbar =() =>{
    return(
        <nav>
            <ul className ="left">
                <li>
                    <Link to ="/">
                        PakGrocers
                    </Link>
                </li>
            </ul>
            <ul className ="right">
                <li><Link to="cart">
                    <span className ="ShoppingCart">
                    <i class="fas fa-cart-plus"></i>
                    <span className="Cartcount">0</span>
                    </span>
                    <a href =""></a>
                    </Link> </li>
            </ul>
        </nav>
    )
}
export default Navbar;