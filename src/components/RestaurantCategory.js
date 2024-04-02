import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => { // this function handles the logic of onClick
        // setShowItems(!showItems); 
        setShowIndex();
        // we are setting the parent i.e RestaurantMenu's setShowIndex so when the category is clicked then its opened and everything else is closed
    };
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer"
                    onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>

        </div>
    );
};
export default RestaurantCategory;