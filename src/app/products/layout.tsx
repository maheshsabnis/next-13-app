import Link from 'next/link';
import React from 'react'
type childrenProps = {
    children:any[]
};


const ProductLayout = (props:childrenProps) => {
  return (
    <div className='container'>
        <h1>About Section</h1>
        <table className="table table-striped table-bordred table-dark">
              <tbody>
                <tr>
                    <td>
                    <Link href='/products'>Product List</Link>
                    </td>
                    <td>
                    <Link href='/products/addproduct'>Add Product</Link>
                    </td>
                </tr>
              </tbody>
           </table>
        {props.children}
    </div>
  )
}

export default ProductLayout;
