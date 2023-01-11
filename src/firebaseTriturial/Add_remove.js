import React from 'react'
import app from '../firebase'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

function Add_remove() {

    const db = getFirestore();
    const colRef = collection(db, 'schoolsStudent') // collection(database, database name)

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

  return (
    <div>add_remove</div>
  )
}

export default Add_remove