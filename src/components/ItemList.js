import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch(); //dispatch is a function that comes from a  useDispatch hook
  console.log({ addItem });
  const handleAddItem = (item) => {
    //dispatch an action using useDispatch

    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-4 m-4 border-b-4 text-left flex justify-between"
          >
            <div className="w-9/12">
              <span className="font-bold">{item.card.info.name}</span>
              <div>
                <span>
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </span>
              </div>

              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12">
              <img src={CDN_URL + item.card.info.imageId} />
              <button
                className="border border-gray-400 px-4 py-1 rounded-lg shadow-md mx-4"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
