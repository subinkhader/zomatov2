import React from "react";
import "./nightlife.css";
import Collection from "../common/collection";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import { nightLife } from "../../data/nightLife";



const gold = (
  <img
    src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png"
    alt="gold"
    style={{ height: "18px" }}
  />
);

const nightFilters = [
  {
    id: 1,
    title: "Filters",
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
  },
  {
    id: 2,
    title: "Gold",
    icon: gold,
  },
  {
    id: 3,
    title: "Rating : 4.0+",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];

const collectionList = [

  {
    id: 1,
    title: "New Year's Special Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/19f14cd659f66c545da13169c20ff4f7_1702291771.png",
    places: "12 places",
  },
  {
    id: 2,
    title: "Newly Opened Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923143.png",
    places: "13 places",
  },
  {
    id: 3,
    title: "Best in Bangalore",
    cover:
      "	https://b.zmtcdn.com/data/collections/e827b335426bc558b1062721b0fdee9d_1702882403.png",
    places: "20 places",
  },
  {
    id: 4,
    title: "Serene Rooftop Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places: "29 places",
  },
  {
    id: 5,
    title: "Trending Restaurants ",
    cover:
      "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places: "10 places",
  },
  {
    id: 6,
    title: "Must-visit Legendary Places",
    cover:
      "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120193.jpg",
    places: "11 places",
  },
  {
    id: 7,
    title: "Picturesque Cafes",
    cover:
      "	https://b.zmtcdn.com/data/collections/6487ebe8fbb28294be84b70041d24601_1691347530.jpg",
    places: "10 places",
  },
  {
    id: 8,
    title: "Romantic Dining Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places: "16 places",
  },
];

const nightlist = nightLife

const NightLife = ({ activeTab, setActiveTab }) => {
  return <div>
    <Collection list={collectionList} />
    <div className="max-width">
      <Filters filterList={nightFilters}/>
    </div>
    <ExploreSection list={nightlist} collectionName="Nightlife Restaurants in Bengaluru"/>
  </div>;
};

export default NightLife;
