import { Item } from "./Item";

export const ItemList = ({ data ,onAdd}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-6">
      {data.map((product) => (
        <Item key={product.id} product={product} onAdd={onAdd}/>
      ))}
    </div>
  );
};
