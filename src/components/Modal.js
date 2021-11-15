import React from "react";
import { projectStorage, projectFirestore } from '../firebase/config';
import { motion } from "framer-motion";
import './Modal.css';
import { usePath } from "hookrouter";


/* displaying the whole pic on click  */
const Modal = ({selected , setSelecetd, docId, setDocId}) => {
    const path = usePath();

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelecetd(null);
            setDocId(null);   
                     
        }
    }
    const handleDelete = () => {
        let result = confirm('Are you sure you want to delete the image?');
        if (result) {
            var deleteRef = projectStorage.refFromURL(selected);
            var deleteDoc= projectFirestore.collection(path);

            //deleting from storage
            deleteRef.delete().then(() => {
                console.log('Image successfully deleted!');
            }).catch((error) => {
                // something went wrong
                console.error('Error removing image: ', error);
            });
            //deleting from firestore
            deleteDoc.doc(docId).delete().then(() => {
                console.log('Document successfully deleted!');
            }).catch((error) => {
                console.error('Error removing document: ', error);
            });
            setSelecetd(null);
            setDocId(null);
            
        }
    }
    return (
        <motion.div className='backdrop' onClick={handleClick}
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
        >
            <motion.img src={selected} alt='showing the pic'
                initial = {{ y: '-100vh'}}
                animate = {{ y: 0 }}
            />
            <button onClick={handleDelete}> Remove image </button>
        </motion.div>
    )
}

export default Modal;