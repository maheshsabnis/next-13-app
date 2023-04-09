
import { GetStaticProps } from 'next'
import React from 'react'
import { ProductInfo } from '../database/productsdb';
import DataGridComponent from '@/app/reusablecomponents/datagridcomponent';
type propsData = {
  products:ProductInfo[]
};

const MyPage = (props:propsData) => {
  return (
    <div>
      <h1>My Page</h1>
      <DataGridComponent dataSource={props.products[0]}></DataGridComponent>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{ products: ProductInfo[] }> = async (
  context
) =>{
  const result = await fetch('http://localhost:3000/api/productsinfo');
  let products:Array<ProductInfo> = new Array<ProductInfo>();
  products = await result.json();
  console.log(`Received Data ${JSON.stringify(products)}`);
  return {
    props: {
      products,
    },
    revalidate:10
  };

};


export default MyPage
