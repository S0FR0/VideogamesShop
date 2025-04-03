import { useLocation } from 'react-router-dom'
import NavBar from './navbar.jsx'

const ShoppingCart = () => {

    return(
        <>
            <NavBar />
            <div className="main-container">
                <div id="cart-container">
                    <h2>Cosmin e prost</h2>
                </div>
                <div id="cart-buttons">
                    <button id="confirm">Purchase</button>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart