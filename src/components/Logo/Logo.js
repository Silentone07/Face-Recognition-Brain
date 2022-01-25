import React from 'react'
import Tilty from 'react-tilty';
import brain from './brain.png';
import  './Logo.css';

export const Logo = () => {
    return (
        <div className='ma4 mt0'>
<Tilty className="Tilty br2 shadow-2" options={{ max : 55}} style={{ height: 150, width: 150 }} >
 <div className="Tilty-inner pa3"> <img  style={{paddingTop:'10px'}}alt='Logo' src={brain}/></div>
</Tilty>
        </div>
    )
}
export default Logo;
