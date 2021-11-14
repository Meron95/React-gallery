import React from "react";
import USeFireStore from '../hooks/UseFirestore'
import { motion } from "framer-motion";
import { usePath } from "hookrouter";
import './ImgGrid.css';

/* fetching from firestore and display it in custom made image-grid*/
const ImgGrid = ({ setSelecetd }) => {
    const path1 = usePath();
    const { docs } = USeFireStore(path1);

    return (
        <div className='container'>
            <div className='img-grid'>
                { docs && docs.map(doc => (
                    /* motion is a libarary that is used to enhance the user experience */
                    <motion.div className='img-wrap' key={doc.id}
                        layout
                        whileHover={{ opacity: 1 }}
                        onClick={() => setSelecetd(doc.url)}
                        
                    >
                        <motion.img src={doc.url} alt='show the pic '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ImgGrid;