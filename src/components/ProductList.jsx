import React from 'react'

const ProductList = ({products}) => {
  return (
    <div className="m-4">
      <h2 className="text-xl">Product List - {Date.now()}</h2>
      <ul className="my-2">
        {products.map((product) =>(
          <li key={product.id}>{product.image} {product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList;