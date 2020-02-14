import React from 'react';
import './button.css';

// const Button = ({children,warna}) =>{
//     return(
//         <div className="btn" style={{background: warna}}>
//             {children}
//         </div>
//     )
// }
const Button = ({children,warna}) =>{
    return(
        <div className='layout'>
        <div className="button" style={{background: warna}}>
            {children}
        </div>
        </div>
    )
}

export default Button