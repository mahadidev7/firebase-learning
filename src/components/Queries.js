import React from 'react';
import {
    getFirestore, collection, onSnapshot, where, query
} from 'firebase/firestore'

function Queries() {
     // need is start
     const db = getFirestore();
     const colRef = collection(db, 'schoolsStudent') // collection(database, database name)
     // need is end
 
 // =========== get data start ============

    //queries
    const newQuery = query(colRef, where("class", "==", "5")) // where(name of object key, operator , find value)

     // real time coloection data 
     onSnapshot(newQuery, (snapshort)=> {
        let allStudentData = [];
         // console.log(snapshort.docs);
         snapshort.docs.forEach((doc) => {
             allStudentData.push({...doc.data(), id: doc.id})
         })
         console.log(allStudentData);
     })

  return (
    <div>
      Queries
    </div>
  )
}

export default Queries
