import Link from 'next/link'
import React from 'react'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const CommpanPage = () => {
  return (
    <div className='container'>
         <table className='table table-bordered table-striped table-warning'>
           <thead>
            <tr>
               <td>
                    <Link href='/'>Home</Link>
                </td>
               <td>
                    <Link href='/about'>About</Link>
               </td>
               <td>
                    <Link href='/products'>Products</Link>
               </td>
            </tr>
           </thead>
         </table>
    </div>
  )
}

export default CommpanPage
