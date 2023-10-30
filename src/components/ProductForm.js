import React  , {useState}from 'react'

const ProductForm = (props) => {

    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');






    const idHandler = (event)=>{
        setId(event.target.value);
    }

    const nameHandler = (event)=>{
        setName(event.target.value);
    }


     const priceHandler = (event)=>{
       setPrice(event.target.value);
     }



     const submitHandler = (event)=>{
        event.preventDefault();
      props.onSubmit(id , name  , price);

      setId('');
      setPrice('');
      setName('');

     }














  return (
  <form>
    <label>Product Id</label>
    <input type='number' value={id} onChange={idHandler}></input>

    <label>selling price</label>
    <input type='number' value={price} onChange={priceHandler}></input>

    <label>Product Name</label>
    <input type='text'value={name} onChange={nameHandler}></input>

    <button type='submit' onClick={submitHandler}>Add Product</button>
  </form>
  
      
  )
}

export default ProductForm
