import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';
import { usePath } from "hookrouter";

/* using firestorage to store the images and path1 is used to create or store in the right collection */
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const path1 = usePath();


    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection(path1);
        

        storageRef.put(file).on('state_changed', (snap) => {
            let precent = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(precent);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            collectionRef.add({ url: url, createdAt });
            setUrl(url);
        })
    }, [file, path1]);

    return { progress, url, error };
}

export default useStorage;