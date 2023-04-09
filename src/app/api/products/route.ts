import { Products } from "../../../../database/productsdb";
import { NextResponse, NextRequest } from "next/server";
export async function GET(request: NextRequest) {
   let {searchParams,pathname} = new URL(request.url);
   
   console.log(`id = ${request.url}`);
   
   const id = searchParams.get('id');
   console.log(`id = ${id}`);
   if(id !== null) {
     return NextResponse.json(Products.find(prd=>prd.ProductRowId === parseInt(id.toString()) ));
   }
   return NextResponse.json(Products);
}

 

export async function POST(request:NextRequest){
    console.log(`In Post ${request.method}`);
    Products.push(await request.json()); 

    let reqBody = request.body; 


    let data = {
        message: 'Post Data successful',
        data: Products
    };
    return new Response(JSON.stringify(data));
}



  