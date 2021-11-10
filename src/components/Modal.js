import React from "react";
import { motion } from "framer-motion";
/* displaying the whole page on click  */
const Modal = ({selected , setSelecetd}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelecetd(null);            
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
        </motion.div>
    )
}

export default Modal;