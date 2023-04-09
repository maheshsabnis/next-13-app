import React from 'react'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
type dataProps = {
    dataSource:any[]
};
const DataGridComponent = (props:dataProps) => {
  if(props.dataSource === undefined || props.dataSource.length === 0) {
    return (
        <div className='alert alert-danger'>
            No Recodrs
        </div>
    );
 } else {
    let columns =   Object.keys(props.dataSource[0]);
    return (
   
        <div className='container'>
         <table className='table table-bordered table-striped'>
              <thead>
                 <tr>
                   {
                    columns.map((col,idx)=>(
                        <th key={idx}>{col}</th>
                     ))
                   }
                 </tr>  
              </thead> 
              <tbody>
                 {
                    props.dataSource.map((record:object,i:number)=>(
                       <tr key={i}>
                         {
                            columns.map((col,idx)=>{
                               return <td key={idx}>
                                     {record[col as keyof typeof record]}
                                </td>
                             })
                         }
                       </tr>     
                    ))
                 }
              </tbody>
            </table>    
        </div>
      );
 } 
      
 
}

export default DataGridComponent;
