import React from "react";
import "./Home.css";
import Product from "./Product";
import AliceCarousel from "react-alice-carousel";

function Home() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      alt="banner"
      // className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      onDragStart={handleDragStart}
    />,

    <img
      // className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/TV/Sanyo/revised/SanyoAmazoneLandingPage_Banner0_1500x4307px._CB1198675309_.jpg"
      alt="banner"
      onDragStart={handleDragStart}
    />,
    <img
      alt="banner"
      // className="home__image"
      src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Certified_Refurbished/XCM_Manual_1307770_1572703_CA_ca_gw_pc_tallhero_2x_ca_en_3671684_1500x600_1X_en_CA._CB661537907_.jpg"
      onDragStart={handleDragStart}
    />,
    <img
      alt="banner"
      // className="home__image"
      src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZTgxNjE2MzAt/ZTgxNjE2MzAt-NmMyYzMyOGEt-w1500._CB660022759_.jpg"
      onDragStart={handleDragStart}
    />,
  ];

  return (
    <div className="home">
      <div className="home__container">
        {/* Alice carousel goes here */}
        <div className="home__image">
          <AliceCarousel
            disableButtonsControls="true"
            // disableDotsControls="true"
            autoPlay="true"
            autoHeight="false"
            autoWidth="false"
            autoPlayInterval="1400"
            mouseTracking
            items={items}
            infinite="true"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean StartUp: How Constant Innovation Creates Radically Successful Business Paperpack"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
          <Product
            id="12321342"
            title="Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone
          "
            price={599.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71wj1PrpqxL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321343"
            title="Apple iPhone 11 Pro Max (64GB | 128GB)"
            price={1099}
            rating={5}
            image="https://m.media-amazon.com/images/G/01/appcore/phone/iphone11promax-compare-transparent-240x160._CB436963815_.png"
          />
          <Product
            id="12321344"
            title="PlayStation 4 Pro 1TB Console"
            price={445}
            rating={4}
            image="https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321345"
            title="Xbox One S 1TB All-Digital Edition Console (Disc-Free Gaming) - [DISCONTINUED]"
            price={395}
            rating={4}
            image="https://m.media-amazon.com/images/I/61p7mgi0GAL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div>
          <img
            className="home__middle"
            src="https://www.idlenerd.com/wp-content/uploads/2018/06/amazon-prime-day-india-1.gif"
            alt="banner"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321346"
            title="Selfie Ring Light with Tripod Stand"
            price={79}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61dR6Py28XL._AC_SX569_.jpg"
          />
          <Product
            id="12321347"
            title="Deep Work: Rules for Focused Success in a Distracted World"
            price={22}
            rating={4}
            image="https://m.media-amazon.com/images/I/71yA4+MC46L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321348"
            title="Nintendo Switch Lite - Gray"
            price={199}
            rating={5}
            image="https://m.media-amazon.com/images/I/71YC7GYYKAL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
