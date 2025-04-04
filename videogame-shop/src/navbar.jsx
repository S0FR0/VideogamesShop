import { Link, useLocation } from "react-router-dom";
import icon from './assets/icon.svg';
import cart from './assets/cart.svg';

const NavBar = ( {shopCart} ) => {
    
    const location = useLocation();
    const isShoppingCartPage = location.pathname === '/shopping-cart';

    let count = 0;

    if(shopCart){
        shopCart.amount.map((item) => count += item)
    }
    console.log(count)

    return (
            (isShoppingCartPage) ? (
                <nav>
                <div className="left">
                <Link to='/'><img src={icon} alt="" height='30' /></Link>
                <h2>GameCenter</h2>
                </div>
                <div className="right">
                </div>
            </nav>
            ) : ((count === 0) ? (
                <nav>
                <div className="left">
                <Link to='/'><img src={icon} alt="" height='30' /></Link>
                <h2>GameCenter</h2>
                </div>
                <div className="right">
                    <Link to='shopping-cart'><img src={cart} alt="" height='30' /></Link>
                </div>
                </nav>
            ):(
                <nav>
                <div className="left">
                <Link to='/'><img src={icon} alt="" height='30' /></Link>
                <h2>GameCenter</h2>
                </div>
                <div className="right">
                    <Link to='shopping-cart'><img src={cart} alt="" height='30' /></Link>
                    <h5 id="cart-counting">{count}</h5>
                </div>
                </nav>
            )
            )
    )
}

export default NavBar;