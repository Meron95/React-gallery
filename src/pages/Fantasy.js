import React, { useState } from 'react';
import ImgGrid from '../components/ImgGrid';
import UploadFrom from '../components/UploadForm';
import Modal from '../components/Modal'
/* route that shows and stores user fantasy themed images */

const Fantasy = () => {
  const [selected, setSelecetd] = useState(null);

  return( 
    <div>
        <UploadFrom />
        <ImgGrid setSelecetd={setSelecetd} />
        {selected && <Modal selected={selected} setSelecetd={setSelecetd}/>}
      </div>
    )
}
export default Fantasy;
