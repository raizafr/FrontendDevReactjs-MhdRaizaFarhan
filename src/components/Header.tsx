export default function Header() {
  return (
    <header className="space-y-5">
      <h1 className="text-4xl font-semibold px-5">Restaurant</h1>
      <p className="lg:w-1/2 md:w-2/3 px-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        quam enim debitis atque vel animi laborum minima fugiat soluta dolorem!
      </p>
      <div className="flex justify-between items-center text-sm border-y py-2 px-5">
        <div className="flex flex-col md:flex-row gap-5 py-1">
          <div>Filter By:</div>
          <div className="space-x-2 border-b pb-0.5">
            <input type="checkbox" name="openNow" />
            <label htmlFor="">Open now</label>
          </div>
          <div className="border-b">
            <select name="" id="">
              <option value="">Price</option>
              <option value="">option2</option>
              <option value="">option3</option>
            </select>
          </div>
          <div className="border-b">
            <select name="" id="">
              <option value="">Category</option>
              <option value="">option2</option>
              <option value="">option3</option>
            </select>
          </div>
        </div>
        <div>
          <button className="font-semibold border px-5 py-2 text-gray-500">
            CLEAR ALL
          </button>
        </div>
      </div>
    </header>
  );
}
