export const BasketItem = ({ item: {id, title, price, count },onAddItem,onRemoveItem,onDecreaseItem }) => {
    return (
      <tr className="hover:bg-gray-700">
        <td className="px-4 py-2 border-b text-sm text-white">{title}</td>
        <td className="px-4 py-2 border-b text-sm text-white">${price}</td>
        <td className="px-4 py-2 border-b text-sm text-white">{count}</td>
        <td className="px-4 py-2 border-b text-sm text-white">${(count * price).toFixed(2)}</td>
        <td className="px-4 py-2 border-b text-sm text-white">
          <button onClick={()=>onRemoveItem(id)} className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-300 mr-2">x</button>
          <button onClick={()=>onAddItem(id)} className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 transition duration-300 mr-2">+</button>
          <button onClick={()=>onDecreaseItem(id)} className="bg-yellow-500 text-white py-1 px-2 rounded-md hover:bg-yellow-600 transition duration-300">-</button>
        </td>
      </tr>
    );
  };
  