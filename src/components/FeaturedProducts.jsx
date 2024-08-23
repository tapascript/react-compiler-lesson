import React from 'react'

const FeaturedProducts = ({featuredProducts}) => {
  console.log(featuredProducts);
  return (
    <div className="m-4">
      <h2 className="text-xl">Featured List - {Date.now()}</h2>
      <ul className="my-2">
        {featuredProducts.map((product) =>(
          <li key={product.id}>{product.image} {product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedProducts