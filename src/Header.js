import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header"
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          placeholder="the feature will be added soon"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>

            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <a
            className="header__optionLineTwo"
            href="https://www.amazon.com/Reunion-Jessica-Hecht/dp/B07FH83YPK/ref=sr_1_1?ie=UTF8&qid=1541691473&sr=8-1&keywords=reunion+alan+hruska"
          >
            <span>Your</span>
          </a>

          <a
            className="header__optionLineTwo"
            href="https://www.amazon.com/Reunion-Jessica-Hecht/dp/B07FH83YPK/ref=sr_1_1?ie=UTF8&qid=1541691473&sr=8-1&keywords=reunion+alan+hruska"
          >
            <span>Prime</span>
          </a>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
