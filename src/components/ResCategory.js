import { useState } from "react";
import ItemList from "./ItemList";
const ResCategory = (props) => {
  // const [showItems, setShowItems] = useState(false);
  const { data, showItems, setExpandItems } = props;
  const handleClick = () => {
    // showItems === false ? setShowItems(true) : setShowItems(false);

    setExpandItems();
  };
  return (
    <>
      <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
          <div
            className="flex justify-between cursor-pointer "
            onClick={handleClick}
          >
            <span className="font-bold">
              {data.title}({data.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>
          {showItems ? <ItemList items={data.itemCards} /> : ""}
        </div>
      </div>
    </>
  );
};
export default ResCategory;
