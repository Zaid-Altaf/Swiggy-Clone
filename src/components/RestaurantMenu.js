import { useState } from "react";
import Shimmer from "./Shimmer";
import { LOGO_LINK } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(1);
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);




    if (resInfo === null) {
        return <Shimmer />
    };
    const { cloudinaryImageId, name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);


    return (
        // Building an accordian menu for the Food delivery app

        <div className="text-center">
            <div className="flex justify-center items-center m-4 p-4">
                <img src={LOGO_LINK + cloudinaryImageId} className="w-40" />
            </div>
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories accordions feature */}
            {categories.map((category, index) => (
                //controlled component
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
