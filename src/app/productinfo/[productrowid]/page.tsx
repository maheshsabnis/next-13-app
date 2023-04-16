import { HTMLAttributes } from 'react';
import { ProductInfo, Products } from '../../../../database/productsdb';
interface pageProps   {
   params:{
    productrowid:number
   }
}


async function getProducts(): Promise<ProductInfo[]>{
   let products:ProductInfo[] =  new Array<ProductInfo>();
   let response  = await fetch('http://localhost:3000/api/productsinfo', {next:{revalidate:10}});
   products = await response.json(); 
   console.log('====================================');
   console.log(`Products Data ${JSON.stringify(products)}`);
   console.log('====================================');
   return products;
 }


//export const revalidate = 10;
export async function generateStaticParams(){
   let productrowids:number[] = new Array<number>();

   let products = await getProducts();


   console.log('====================================');
   console.log(`Data in Page ${JSON.stringify(products[0])}`);
   console.log('====================================');
   
   let result:ProductInfo[] = new Array<ProductInfo>();
   



   products.forEach((p,i)=>{
      productrowids.push(p.ProductRowId);
   });


   //const productrowids = [1,2,3,6,4,5];
    console.log(`Received Product Row Ids ${productrowids}`);
   return productrowids.map((productrowid)=>{
     return {productrowid};
   });
    
}
 
 const page = ({ params }: pageProps) => {
    return (
        <div>{params.productrowid}!!w35558</div>
    );
};

export default page;
