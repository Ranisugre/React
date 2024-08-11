import Shimmer from "./components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantinfo from "../utils/useRestaurantinfo";
import ResCategory from "./components/ResCategory";
import { useState } from "react";
const Restaurantinfo = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantinfo(resId);
  const [expandItems, setExpandItems] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(categories);

  return (
    <>
      <div className="text-center">
        {/* <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(",")}</p>
        <p className="font-bold text-lg">{costForTwoMessage}</p> */}
        {categories.map((category, index) => {
          return (
            <ResCategory
              key={category.card.card.title}
              data={category.card.card}
              showItems={index === expandItems ? true : false}
              setExpandItems={() => {
                if (index === expandItems) {
                  setExpandItems(null);
                } else {
                  setExpandItems(index);
                }
              }}
            />
          );
        })}
      </div>
    </>
  );
};
export default Restaurantinfo;
