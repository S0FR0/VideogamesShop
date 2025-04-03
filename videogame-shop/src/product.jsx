import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './navbar.jsx';

const ProductPage = () => {

    const [ fetchedData, setFetchedData ] = useState([]);
    const [ product, setProduct] = useState();
    const location = useLocation();

    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=d7707bf8f376411fbb59f9d5446d82b6&dates=2019-09-01,2019-09-30&platforms=18,1,7', {mode: 'cors'})
        .then((res) => res.json())
        .then((res) => setFetchedData(res.results))
        .catch((err) => console.error(err))
    }, [])

    useEffect(() => {
        if(fetchedData.length >= 19) {
            const productId = location.pathname.slice(1)
            const selectedProduct = fetchedData.find((item) => item.id == productId);
            setProduct(selectedProduct);
        }
    }, [fetchedData, location.pathname])

    setTimeout(() => {
        alert(data)
    })

    console.log(product)
    return(
            !product ? (
            <>
                <NavBar />
                <div className="main-container">
                <h2>Loading...</h2>
                </div>
            </>
    ):(
        <>
        <NavBar />
        <div className="main-container">
            <div className="product-container">
            <div className="main-data">
                    <img className="card-img" src={product.background_image} alt={product.name} width='250px' />
                    <div className="product-title">
                    <h2 className="game-title">{product.name}</h2>
                    <h4 className="genra">{product.genres[0].name}</h4>
                    </div>
                </div>
            <div className="meta-data">
                <h3>Score: {product.rating} / 5</h3>
                <div className="ratings">
                    <h3>Ratings</h3>
                    <ul>
                        <li>{product.ratings[0].title}</li>
                        <li>{product.ratings[1].title}</li>
                        <li>{product.ratings[2].title}</li>
                        <li>{product.ratings[3].title}</li>
                    </ul>
                    <img className='game-img' src={product.short_screenshots[1].image} alt=""/>
                    <img className='game-img' src={product.short_screenshots[2].image} alt="" />
                    <img className='game-img' src={product.short_screenshots[3].image} alt="" />
                    <img className='game-img' src={product.short_screenshots[4].image} alt=""/>
                    <img className='game-img' src={product.short_screenshots[5].image} alt="" />
                </div>
                <div className="pricing">
                    <h3>60$</h3>
                </div>
            </div>
            </div>
        </div>
        </>
    )
)}

export default ProductPage;