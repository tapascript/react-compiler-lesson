import React from 'react'

import Heading from './Heading';
import FeaturedProducts from './FeaturedProducts';
import ProductList from './ProductList';

const ProductPage = ({products, heading}) => {
  const featuredProducts = products.filter(product => product.featured);
  const totalProducts = products.length;

  return (
    <div className="m-2">
      <Heading
        heading={heading}
        totalProducts={totalProducts} />

      <ProductList
        products={products} />

      <FeaturedProducts
        featuredProducts={featuredProducts} />  

    </div>
  )
}

export default ProductPage