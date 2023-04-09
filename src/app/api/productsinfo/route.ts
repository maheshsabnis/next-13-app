import { NextRequest, NextResponse } from "next/server";
import ExcuteQuery from "../../../../dataaccess/db";
import { ProductInfo } from "../../../../database/productsdb";
export async function GET(req: NextRequest){
   const data = await ExcuteQuery("Select * from ProductInfo");
   return NextResponse.json(data); 
}

export async function POST(req:NextRequest){

   const body = await req.json();
   console.log(`Received Boidy ${JSON.stringify(body)}`);
   const product: ProductInfo = new ProductInfo(
      0, body.ProductId, body.ProductName,
      body.CategoryName, body.Manufacturer,
      body.Description, parseInt(body.BasePrice)   
   );

   console.log(`Received Data ${JSON.stringify(product)}`);

   const query:string = `Insert into ProductInfo (ProductId, ProductName,CategoryName,Manufacturer,Description,BasePrice) values ('${product.ProductId}', '${product.ProductName}', '${product.CategoryName}','${product.Manufacturer}', '${product.Description}', ${product.BasePrice})` ;

   console.log(query);

   const data = await ExcuteQuery(query);
   return NextResponse.json(data); 
}