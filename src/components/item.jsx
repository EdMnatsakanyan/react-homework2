export const Item = ({ product,onAdd }) => {
    return (
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
        <div className="flex flex-col items-center">
          <img src={product.photo || "https://via.placeholder.com/150"} alt={product.title} className="w-32 h-32 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-sm text-gray-400 mb-1">{product.category}</p>
          <p className="text-sm text-gray-400 mb-2">ID: {product.id}</p>
          <h3 className="text-lg font-semibold text-green-400">${product.price}</h3>
          <button onClick={()=>onAdd(product)} className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300">
                Add to basket
          </button>
        </div>
      </div>
    );
  };
  