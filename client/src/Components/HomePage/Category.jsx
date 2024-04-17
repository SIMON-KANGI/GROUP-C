
const Category = ({ name, image, description }) => (
  <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
      <a href="#" className="flex flex-wrap no-underline hover:no-underline">
        <p className="w-full text-gray-600 text-xs md:text-sm px-6">{name}</p>
        <div className="w-full font-bold text-xl text-gray-800 px-6">{description}</div>
      </a>
    </div>
    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
      <div className="flex items-center justify-start">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <span className="font-bold text-gray-800">Learn More</span>
      </div>
    </div>
  </div>
);

export default Category;