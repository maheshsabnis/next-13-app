import Image from 'next/image'
import { Inter } from 'next/font/google'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import CommpanPage from './common'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='container'>
         <h1>The Next.js 13 App</h1>
         {/* <CommpanPage></CommpanPage> */}
         {/* <table className='table table-bordered table-striped'>
           <thead>
            <tr>
               <td> <Link href='/'>Home</Link></td>
               <td><Link href='/about'>About</Link></td>
            </tr>
           </thead>
         </table> */}
      </div>
  )
}
