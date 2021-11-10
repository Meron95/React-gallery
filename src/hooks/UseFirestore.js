import { usePath } from "hookrouter";
import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

/* using firestore to fetch the images and path1 to get the right collection(category) */
const UseFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const path1 = usePath();

    useEffect(() => {
        const unsub = projectFirestore.collection(path1)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach( doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });
        return () => unsub();

    }, [collection, path1])
    return {docs};
}

export default UseFirestore;