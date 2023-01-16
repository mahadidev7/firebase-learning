import React from 'react'
import {
    getFirestore, collection, getDocs, onSnapshot
} from 'firebase/firestore'


function RealTimeData() {

     // need is start
     const db = getFirestore();
     const colRef = collection(db, 'schoolsStudent') // collection(database, database name)
     // need is end
 
 // =========== get data start ============
     // real time coloection data 
     onSnapshot(colRef, (snapshort)=> {
        let allStudentData = [];
         // console.log(snapshort.docs);
         snapshort.docs.forEach((doc) => {
             allStudentData.push({...doc.data(), id: doc.id})
         })
         console.log(allStudentData);
     })
 // =========== get data end ============
  return (
    <div>
      RealTimeData
    </div>
  )
}

export default RealTimeData
