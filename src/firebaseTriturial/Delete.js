import React, { useState } from 'react'
import {
    getFirestore, collection, deleteDoc, doc
} from 'firebase/firestore'

function Delete() {
    const [studentID, setStudentID] = useState("");

    // need is start
    const db = getFirestore();
    const colRef = collection(db, 'schoolsStudent') // collection(database, database name)
    // need is end

    const handelDelete = () => {
       const docRef = doc(db, 'schoolsStudent', studentID);
       deleteDoc(docRef)
       .then(() => {
        setStudentID("")
    })
    }

  return (
    <div className='delete'>
    
    <h2>Delete student </h2>
        <div>
        <label>ID </label>
        <input type="text" name="studentName" onChange={(e) => setStudentID(e.target.value)} value={studentID}/>
        
        </div>
        <button onClick={()=> handelDelete()}>Delete a Student</button>
    </div>
  )
}

export default Delete
