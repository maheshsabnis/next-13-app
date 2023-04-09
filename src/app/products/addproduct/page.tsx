'use client'
import React, {useState} from 'react'
import { ProductInfo } from '../../../../database/productsdb';
import SelectComponent from '@/app/reusablecomponents/selectcomponent';
import { useRouter } from 'next/router';

const AddProductPage = () => {
  const [product, setProduct] =  useState(new ProductInfo(0,'','','','','',0));
  
 // const router = useRouter();
  
  
  const categories = ["Electronics","Electrical", 'Food', 'Fashion', 'Home'];
  const manufacturers = ["MS-Electronics","MS-Electrical", 'MS-Food', 'MS-Fashion', 'MS-HomeAppliances'];

  const clear = () => {
    setProduct(new ProductInfo(0,'','','','','',0));
  };


  const save= async ()=>{
    const response = await fetch('http://localhost:3000/api/productsinfo', {
        method:'POST',
        body:JSON.stringify(product),
        headers:{
            'Content-Type':'applciation/json'
        }
    }); 
    //router.push("/products");
  };

  return (
    <div className='container'>
        <div className='form-group'>
            <label>Product Id</label>
            <input type="text" className='form-control'
             placeholder='Enter Product Id'
              value={product.ProductId}
               onChange={(evt)=>setProduct({...product, ProductId:evt.target.value})}/>
        </div>
        <div className='form-group'>
            <label>Product Name</label>
            <input type="text" className='form-control'
             placeholder='Enter Product Name'
              value={product.ProductName}
               onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}/> 
        </div>
        <div className='form-group'>
            <label>Category Name</label>
            <SelectComponent
             dataSource={categories}
              propertyName={product.CategoryName}
              selectedData={(val:string)=>setProduct({...product, CategoryName:val})}/> 
        </div>
        <div className='form-group'>
            <label>Manufacturer Name</label>
            <SelectComponent
             dataSource={manufacturers}
              propertyName={product.Manufacturer}
              selectedData={(val:string)=>setProduct({...product, Manufacturer:val})}/> 
        </div>
        <div className='form-group'>
            <label>Description</label>
            <textarea   className='form-control'
             placeholder='Enter Descirption'
              value={product.Description}
               onChange={(evt)=>setProduct({...product, Description:evt.target.value})}/> 
        </div>
        <div className='form-group'>
            <label>Base Price</label>
            <input type="text" className='form-control'
             placeholder='Enter Base Price'
              value={product.BasePrice}
               onChange={(evt)=>setProduct({...product, BasePrice:parseInt(evt.target.value)})}/> 
        </div>
        <div className='form-group'>
             <button className='btn btn-warning'
             onClick={clear}>Clear</button>
               <button className='btn btn-success'
                onClick={save}
             >Save</button>
        </div>
    </div>
  )
}

export default AddProductPage;
