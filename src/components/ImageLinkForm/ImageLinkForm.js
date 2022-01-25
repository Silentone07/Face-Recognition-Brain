import React from 'react'
import './ImageLinkForm.css';

export const ImageLinkForm = ({ OnInputChange , onButtonSubmit}) => {
    return (
        <div>
             <p className='f3'>
                 {'This Brain will detect faces of pictures.'}
                 </p>
                 <div className='centre'>
                     <div className=' form centre pa4 br3 shadow-5'>
                     <input className='f4 pa2 w-70 centre' type='tex' onChange={OnInputChange}/>
                     <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-pink' onClick={onButtonSubmit}>
                         Detect</button>
                     </div>
                 </div>
        </div>
    )
}
export default ImageLinkForm;