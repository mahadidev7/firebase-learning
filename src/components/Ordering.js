import React from 'react';
import {
    getFirestore, collection, onSnapshot, where, query, orderBy
} from 'firebase/firestore'

function Ordering() {
     // need is start
     const db = getFirestore();
     const colRef = collection(db, 'schoolsStudent') // collection(database, database name)
     // need is end
 
 // =========== get data start ============

    //queries
    const newQuery = query(colRef, where("name", "==", "zoto"), orderBy("class", "desc")) // where(name of object key, operator , find value), orderby(name of object key, asc/desc)

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

export default Ordering
