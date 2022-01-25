import React from 'react';
import './FaceRecognition.css';

export const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='centre ma'>
           <div className='absolute mt'>
               <img id="imageUrl" alt='' src={imageUrl}  width='500px' height='auto'/>
               <div className='bounding-box' style={{ top:box.topRow , right:box.rightCol , bottom:box.bottomRow , left:box.leftCol}}></div>
               </div> 
        </div>
    )
}
 export default FaceRecognition;