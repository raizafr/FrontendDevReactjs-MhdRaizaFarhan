import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

interface ItemType{
  id:number;
  name:string;
  pictureId:string;
}

export default function Section() {
  const [data, setData] = useState<ItemType[]>([]);
  const [dataRestaurant, setDataRestaurant] = useState<ItemType[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://restaurant-api.dicoding.dev/list");
        setData(res.data.restaurants);
        setDataRestaurant(res.data.restaurants.slice(0, 8));
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const handleClick = () => {
    if (dataRestaurant.length <= 8) {
      return setDataRestaurant(data);
    }
    setDataRestaurant(data.slice(0, 8));
  };

  return (
    <section className="px-5 space-y-8">
      <h1 className="text-3xl">All Restaurants</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {dataRestaurant.map((item:ItemType) => (
          <div key={item.id}>
            <Card name={item.name} picturuId={item.pictureId} />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-5">
        <button
          className="border w-1/3 text-center border-blue-900 py-1 font-semibold hover:bg-blue-200 duration-300"
          onClick={handleClick}
        >
          {dataRestaurant.length <= 8 ? "LOAD MORE" : "LOAD LESS"}
        </button>
      </div>
    </section>
  );
}
