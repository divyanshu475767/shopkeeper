import React from 'react'

const ProductList = (props) => {

    const handleDelete = ()=>{
        props.onDelete(props.product.id ,props.product.price);
    }

  return (
    <div>
      <p>{props.product.id} -{props.product.name} - {props.product.price} </p>
      <button onClick={handleDelete}>Delete product</button>
    </div>
  )
}

export default ProductList
