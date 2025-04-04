import { Link } from "react-router-dom";

const Card = (props) => {
    const {backgroundImg, genra, id, name, releaseDate, cart, setCart} = props;

    const handleClick = () => {
        if (!cart.title) {
            setCart({
                title: [name],
                amount: [1],
                price: [60],
            });
            return
        }

        if (cart.title.includes(name)) {
            const index = cart.title.findIndex(item => item === name);
            const updatedAmount = [...cart.amount];
            updatedAmount[index] += 1;
            setCart({
                title: [...cart.title],
                amount: updatedAmount,
                price: [...cart.price],
            })
        } else {
            setCart({
                title: [...cart.title, name],
                amount: [...cart.amount, 1],
                price: [...cart.price, 60],
            });
        }
    };

    return (
        <>
            <div className="card-container">
                <div className="main-data">
                    <img className="card-img" src={backgroundImg} alt={name} />
                    <div className="game-data">
                    <h2 className="game-title">{name}</h2>
                    <h4 className="genra">{genra}</h4>
                    <p className="release-date">{releaseDate}</p>
                </div>
                </div>
                <div className="card-btns">
                    <Link to={`${id}`} className="view-btn">View</Link>
                    <button className="add-btn" onClick={handleClick}>Add to cart</button>
                    <h3 className="price-tag">$60</h3>
                </div>
            </div>
        </>
    )
}

export default Card;