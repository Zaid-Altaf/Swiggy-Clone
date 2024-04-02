
import { LOGO_LINK } from "../utils/constant";
const RestaurantCard = (props) => {
    // const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = props?.resData;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img src={LOGO_LINK + cloudinaryImageId} alt="res-logo" className="rounded-lg" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>

        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => { // THis is a Higher Order Component 
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
