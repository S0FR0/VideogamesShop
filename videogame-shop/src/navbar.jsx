import { Link, useLocation } from "react-router-dom";
import icon from './assets/icon.svg';
import cart from './assets/cart.svg';

const NavBar = ({ammount}) => {
    
    const location = useLocation();
    const isShoppingCartPage = location.pathname === '/shopping-cart';

    const count = 0;

    if(ammount > 0) ammount.map((item) => count += item)
        

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
            ) : (
                <nav>
                <div className="left">
                <Link to='/'><img src={icon} alt="" height='30' /></Link>
                <h2>GameCenter</h2>
                </div>
                <div className="right">
                    <Link to='shopping-cart'><img src={cart} alt="" height='30' /></Link>
                </div>
                </nav>
            )
    )
}

export default NavBar;