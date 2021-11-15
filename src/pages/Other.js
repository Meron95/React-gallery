import React, { useState } from 'react';
import ImgGrid from '../components/ImgGrid';
import UploadFrom from '../components/UploadForm';
import Modal from '../components/Modal'

/* route that shows and stores user 'other' images */
const Other = () => {
  const [selected, setSelecetd] = useState(null);
  const [docId, setDocId] = useState(null);

  return( 
    <div>
        <UploadFrom />
        <ImgGrid setSelecetd={setSelecetd} setDocId={setDocId}/>
        {selected && <Modal selected={selected} setSelecetd={setSelecetd}
          docId={docId} setDocId={setDocId}/>}
      </div>
    )
  
}
export default Other;
