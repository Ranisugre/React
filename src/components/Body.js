import Restaurantcard from "./Restaurantcard";
// import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listofrestaurants, setListOfRestaurants] = useState([]); //20
  const [listofAllRestaurants, setlistofAllRestaurants] = useState([]); //20

  const [searchBtn, setsearchBtn] = useState("");
  console.log("body rendered", listofrestaurants);

  useEffect(() => {
    fetchData();
    console.log("use effect called");
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    console.log({ data });
    // const json = await data.json();
    // console.log("fetchData");
    // console.log(json.data.cards.card.card.restaurants.info)
    // json.data.cards.map((card, i) => {
    //     console.log(card.card.card?.gridElements?.infoWithStyle?.restaurants, i)
    // if(card?.card?.gridElements){
    //   console.log(card)
    // }
    //  });

    //listofAllRes = {all data} // 20
    //listofRes = {all data} // 15 20 12
    // setlistofAllRestaurants(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    // setListOfRestaurants(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        looks like you are offline!!! Please check your internet connection...
      </h1>
    );

  if (listofrestaurants.length === 0) {
    return <Shimmer />;
  }
  const handleFilter = () => {
    const filteredList = listofAllRestaurants.filter((res) => {
      return res.info.avgRating > 4;
    });
    console.log({ filteredList });
    setListOfRestaurants(filteredList);
  };

  return (
    <>
      <div className="res-container">
        <div className="flex items-center">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              onChange={(e) => setsearchBtn(e.target.value)}
            ></input>
            <button
              className="px-4 py-1 border border-solid border-black m-4 bg-gray-100 rounded-lg"
              onClick={() => {
                console.log(searchBtn);
                const filteredRestaurant = listofAllRestaurants.filter(
                  (data) => {
                    // const lowerSearchBtn = searchBtn.toLowerCase();//burgers

                    return data.info.name.toLowerCase().includes(searchBtn);
                  }
                );
                setListOfRestaurants(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4">
            <button
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              onClick={() => {
                handleFilter();
              }}
            >
              Top-rated Restaurants
            </button>
          </div>
          <div className="search m-4 p-4">
            <button
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              onClick={() => {
                setListOfRestaurants(listofAllRestaurants);
              }}
            >
              All Restaurants
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {listofrestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <Restaurantcard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
