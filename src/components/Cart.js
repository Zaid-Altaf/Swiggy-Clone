import { clearCart } from "../utils/cartSlice"
import ItemList from "./ItemList"
import { useDispatch, useSelector } from "react-redux"


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    // Whenever you are subscribing to the store make sure to subscribe to the correct portion of the store,
    // If you subscribe to the whole store then cartItems will be updated whenever there is any update in the store and it is a wastage of resources, given below is an example of what I am talking about
    // const cartItems= useSelector((store)=>store);
    // const cartItems= store.cart.items; 
    const dispatch = useDispatch();
    // Purpose: Accesses the Redux dispatch function within a React functional component.

    const handleClearCart = () => {
        dispatch(clearCart());
        // dispatch is calling the 
    }


    return (
        <div className="text-center p-4 m-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems?.length === 0 && <h1>Add items to the Cart. Cart is Empty!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;