import Link from 'next/link';
import React from 'react'
type childrenProps = {
    children:any[]
};


const AboutLayout = (props:childrenProps) => {
  return (
    <div className='container'>
        <h1>About Section</h1>
        <table className="table table-striped table-bordred table-dark">
              <tbody>
                <tr>
                    <td>
                    <Link href='/about/company'>About Company</Link>
                    </td>
                    <td>
                    <Link href='/about/team'>About Team</Link>
                    </td>
                </tr>
              </tbody>
           </table>
        {props.children}
    </div>
  )
}

export default AboutLayout
