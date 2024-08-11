import { CDN_URL } from "../../utils/constants";

const Restaurantcard = (props) => {
  const { resData } = props;

  return (
    <>
      <div className="m-4 p-4 w-[250px] break-words rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          src={CDN_URL + resData.info.cloudinaryImageId}
          className="rounded-lg w-[250px] h-40"
        ></img>
        <h4 className="font-bold py-4">{resData.info.name}</h4>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    </>
  );
};
export default Restaurantcard;
