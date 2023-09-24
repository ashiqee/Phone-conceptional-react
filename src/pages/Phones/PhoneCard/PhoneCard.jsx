const PhoneCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};

  const handleAddToFavorites = () => {
    console.log(phone);
  };
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-fit w-full rounded-t-lg  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {phone_name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: {price}$
          </p>

          <button
            onClick={handleAddToFavorites}
            className="btn p-2 text-rose-400  font-extrabold rounded"
          >
            Add to Favorites
          </button>
        </div>
      </a>
    </div>
  );
};

export default PhoneCard;
