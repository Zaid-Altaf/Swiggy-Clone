import { CDN_LINK } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
console.log("this is header");
const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlinestatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sticky" >
            <div className="logo-container">
                <Link to="/">
                    <img
                        className="w-56"
                        src={CDN_LINK} />
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 rounded-xl hover:bg-pink-500">Online Status : {onlinestatus ? "✅" : "❌"}</li>
                    <li className="px-4 rounded-xl hover:bg-pink-500"><Link to="/">Home</Link></li>
                    <li className="px-4 rounded-xl hover:bg-pink-500"><Link to="/about">About Us</Link></li>
                    <li className="px-4 rounded-xl hover:bg-pink-500"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 rounded-xl hover:bg-pink-500 font-bold text-xl"><Link to="/cart" >Cart - ({cartItems.length} items)</Link></li>
                    <button className="px-2 rounded-xl hover:bg-pink-500" onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                    }}>
                        {btnNameReact}
                    </button>
                </ul>

            </div>
        </div>
    );
};

export default Header;