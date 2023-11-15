import { AiOutlineStar } from "react-icons/ai";

interface CardProps {
  name: string;
  picturuId: string;
}

export default function Card({ name, picturuId }: CardProps) {
  return (
    <div className="w-fit space-y-3">
      <img
        src={`https://restaurant-api.dicoding.dev/images/medium/${picturuId}`}
        alt={name}
        className="w-48 h-32"
      />
      <h2 className="font-semibold">{name}</h2>
      <div className="flex">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <div className="flex justify-between items-center text-xs text-gray-600">
        <span>price</span>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span>Open Now</span>
        </div>
      </div>
      <div>
        <button className="bg-blue-900 hover:bg-blue-800 hover:scale-105 duration-300 text-white w-full py-1">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
