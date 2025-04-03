import App from "./App";
import ErrorPage from "./Error";
import ShoppingCart from "./ShoppingCart";
import ProductPage from "./product";

const routes = [
    {
        path:'/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path:'shopping-cart',
        element: <ShoppingCart />
    },
    {
        path:':id',
        element: <ProductPage />,
    }
]

export default routes;