import React, { useEffect } from 'react';
import useStorage from '../hooks/UseStorage';
import { motion } from 'framer-motion';
import './ProgressBar.css';

/* progress bar for the files*/
const ProgressBar = ({ file, setFile}) => {
    const {url, progress} = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])
    
    return (   
        <motion.div className='progress-bar'
            initial= {{ width: 0 }}
            animate= {{ width: progress + '%'}}
        > </motion.div>
    )
}

export default ProgressBar;