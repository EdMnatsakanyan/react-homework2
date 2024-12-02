import { BasketItem } from "./basket.item";

export const Basket = ({ data,onAddItem,onRemoveItem,onDecreaseItem}) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-400">Title</th>
            <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-400">Price</th>
            <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-400">Count</th>
            <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-400">Subtotal</th>
            <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <BasketItem key={item.id} item={item} onAddItem={onAddItem} onRemoveItem={onRemoveItem} onDecreaseItem={onDecreaseItem}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};
