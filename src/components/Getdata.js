import React from 'react'
import app from '../firebase'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

function Getdata() {

    // need is start
    const db = getFirestore();
    const colRef = collection(db, 'schoolsStudent') // collection(database, database name)
    // need is end

// =========== get data start ============
    // get coloection data 
    getDocs(colRef)
    .then((snapshort) => {
        let allStudentData = [];
        // console.log(snapshort.docs);
        snapshort.docs.forEach((doc) => {
            allStudentData.push({...doc.data(), id: doc.id})
        })
        console.log(allStudentData);
    })
    .catch( err => {
        console.log(err.message);
    })
// =========== get data end ============


  return (
    <div>Getdata</div>
  )
}

export default Getdata