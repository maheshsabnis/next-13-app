import React from 'react'
import { ProductInfo } from '../../../database/productsdb';
import DataGridComponent from '../reusablecomponents/datagridcomponent';

 async function getProducts(): Promise<ProductInfo[]>{
  let products:ProductInfo[] =  new Array<ProductInfo>();
  let response  = await fetch('http://localhost:3000/api/productsinfo',{ next: { revalidate: 60 } });
  products = await response.json(); 
  console.log('====================================');
  console.log(`Products Data ${JSON.stringify(products)}`);
  console.log('====================================');
  return products;
}

const ProductsPage = async () => {
  const result = await getProducts();
  return (
    <div className='container'>
       <h1>The Product Page</h1>
       <DataGridComponent dataSource={result[0]}></DataGridComponent> 
    </div>
  )
}

export default ProductsPage
