import React, { useState } from 'react';
import ImgGrid from '../components/ImgGrid';
import UploadFrom from '../components/UploadForm';
import Modal from '../components/Modal'

/* route that shows and stores user 'other' images */
const Other = () => {
  const [selected, setSelecetd] = useState(null);

  return( 
    <div>
        <UploadFrom />
        <ImgGrid setSelecetd={setSelecetd} />
        {selected && <Modal selected={selected} setSelecetd={setSelecetd}/>}
      </div>
    )
  
}
export default Other;
