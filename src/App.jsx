import { useState } from 'react';
import { ItemList } from './components/item.list';
import './App.css';
import { Basket } from './components/basket';

/* App.jsx */
function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Wireless Headphones", price: 49.99, category: "Electronics", photo: "" },
    { id: 2, title: "Yoga Mat", price: 19.99, category: "Fitness", photo: "" },
    { id: 3, title: "Desk Lamp", price: 29.99, category: "Home Decor", photo: "" },
    { id: 4, title: "Running Shoes", price: 59.99, category: "Footwear", photo: "" },
    { id: 5, title: "Bluetooth Speaker", price: 39.99, category: "Electronics", photo: "" },
    { id: 6, title: "Cooking Utensil Set", price: 24.99, category: "Kitchen", photo: "" },
    { id: 7, title: "Notebook", price: 4.99, category: "Stationery", photo: "" },
    { id: 8, title: "Gaming Mouse", price: 34.99, category: "Gaming", photo: "" },
    { id: 9, title: "Sunglasses", price: 14.99, category: "Accessories", photo: "" },
    { id: 10, title: "Portable Charger", price: 25.99, category: "Electronics", photo: "" },
  ]);

  const [basket, setBasket] = useState([]);

  const moveToBasket=(item)=>{
    const found=basket.find(product=>product.id==item.id)

    if(found){
      found.count++
      setBasket([...basket])
    }else{
      setBasket([...basket,{...item,count:1}])
    }
  }

  const add=(id)=>{
    const found=basket.find(item=>item.id===id)

    found.count++
    setBasket([...basket])
  }

  const remove=(id)=>{
    setBasket([...basket.filter(item=>item.id!==id)])
  }

  const decrease=(id)=>{
    const found=basket.find(item=>item.id===id)
    found.count--

    if(found.count<=0){
      remove(id)
      
    }else{
      setBasket([...basket])
    }
  }

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl font-bold text-center py-8">Online Shop</h1>
        <ItemList data={products} onAdd={moveToBasket} />
        <h1 className="text-4xl font-bold text-center py-8">Basket</h1>
        <Basket data={basket} onAddItem={add} onRemoveItem={remove} onDecreaseItem={decrease}/>
      </div>
    </>
  );
}

export default App;
