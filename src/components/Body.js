import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    // here restaurantList is the initial code, setRestaurantList is the function which updates the restaurantList after it has been changed

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // we are using this State variables as storage to store the filtered the list of restaurant when we search. 

    const [searchText, setSearchText] = useState("");

    useEffect(() => { // using useEffect hook to render the api for the second time after the page renders. 
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        //Optional Chaining 
        setRestaurantList(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants);
    }

    console.log(filteredRestaurant);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    //Conditional Rendering

    return restaurantList.length === 0 ?
        (<Shimmer />) : (
            <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input type="text"
                            className="border border-solid border-black"
                            value={searchText} onChange={(e) => {
                                setSearchText(e.target.value);
                            }} />
                        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                            onClick={() => {
                                const filteredRestaurant = restaurantList.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                    // converting the stored restaurant name to lowercase and also converting the searchText input to lowercase and filtering

                                );
                                setFilteredRestaurant(filteredRestaurant);
                            }}

                        >Search</button>
                    </div>
                    <div className="search m-4 p-4 flex items-center">
                        <button className="px-4 py-2 bg-gray-300 rounded-lg"
                            onClick={() => {
                                const filteredList = restaurantList.filter(
                                    (res) => res.info.avgRating > 4.3
                                );
                                setRestaurantList(filteredList); // this updates the list so react now re renders the component
                            }}> Top Rated Restaurants
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {
                        filteredRestaurant.map((restaurant) => ( //here we are using parentheses instead of usual curly brackets because we are typing in jsx below so to make sure babel understands it we are using parentheses. 

                            // we are displaying filteredRestaurant because we want to show the restaurant we want to see after searching, while the real restaurant list is unchanged. 
                            <Link key={restaurant.info.id} to={/restaurant/ + restaurant.info.id}>
                                {restaurant?.info.promoted ? (
                                    <RestaurantCardPromoted resData={restaurant?.info} />
                                ) : (
                                    <RestaurantCard resData={restaurant?.info} />
                                )}
                            </Link>
                        ))
                    };
                </div>
            </div>
        );
};

export default Body;