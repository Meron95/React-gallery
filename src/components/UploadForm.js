import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './UploadForm.css'

/* this is where the input file happens and checked*/
const UploadForm = () => {

    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    const [error, setError] = useState(null);

    const handleChange = (e) => {

        let chosen = e.target.files[0];
        if (chosen && types.includes(chosen.type)) {
            setFile(chosen);
            setError('');
        }else {
            setFile(null);
            setError('Please select only with valid type image png, jpeg or jpg');

        }
    }


    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
      </form>
    )
}


export default UploadForm;
