import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [Btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // selector is a hook, which is a normal js function which return jsx
  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  // we are subscribing  to the store,useSelector has access to whole store , but we want only small portion of the store.
  return (
    <div className="flex justify-between shadow-lg bg-gray-100">
      <div className="logo-container">
        <img className="w-52" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-2">
          <li className="px-4">onlineStatus :{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/Cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="px-4">
            <Link to="/Userfun">Userfun</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              Btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {Btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
