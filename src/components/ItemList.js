import { LOGO_LINK } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    };
    console.log(items);
    return <div>

        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-bold">{item.card.info.name} </span>
                        <span className="font-bold">
                            - ₹{item.card.info.price ?
                                item.card.info.price / 100 :
                                item.card.info.defaultPrice}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <img src={LOGO_LINK + item.card.info.imageId} className="w-full" />
                    <button className="p-2 bg-black text-white shadow-lg "
                        onClick={() => handleAddItem(item)}>Add +</button>
                </div>
            </div>
        ))}
    </div>
};

export default ItemList;