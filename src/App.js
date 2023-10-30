import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";


let dummy_products = [
 
]




function App() {


  const [products , setProducts] = useState(dummy_products);

  const [price , setPrice] = useState(0);

  const gettingValue = (id , name , price)=>{
  localStorage.setItem(`${id}` , `${name} - ${price}`  )
     

    let updatedProducts =[...products , {id:id, name:name, price:price}]
     let newPrice = 0;
    updatedProducts.forEach(product=>{
      newPrice = newPrice + parseInt(product.price)
    })

    setPrice(newPrice);
    setProducts(updatedProducts);

  }

  const deleteHandler = (id , newPrice)=>{
  //  console.log(id);
  setPrice(price-newPrice);
  let updatedProducts = products.filter(product=>{
    if(product.id !== id) return product;

   
  })

   setProducts(updatedProducts)
  }


  return (
    <div className="App">
      <ProductForm onSubmit = {gettingValue}/>


    {products.map((product)=>{
      
      return  <ProductList product={product} key ={product.id}
      onDelete = {deleteHandler}/>
    })}

    <p>Total value worth of products is Rs. {price}</p>
    </div>
  );
}

export default App;
