import React, { useState } from 'react'
import {
    getFirestore, collection, addDoc
} from 'firebase/firestore'

function Add() {
    const [studentName, setStudentName] = useState("");
    const [classCounter, setClassCounter] = useState("");

    // need is start
    const db = getFirestore();
    const colRef = collection(db, 'schoolsStudent') // collection(database, database name)
    // need is end

    const handelAdd = () => {
        addDoc(colRef, {
            name: studentName,
            class: classCounter
        })
        .then(() => {
            setStudentName("")
            setClassCounter("")
        })
    }



  return (
    <div className='add'>
    
    <h2>Add student </h2>
        <div>
        <label>student Name </label>
        <input type="text" name="studentName" onChange={(e) => setStudentName(e.target.value)} value={studentName}/>
        
        </div>
        <div>
        <label>class </label>
        <input type="text" name="class" onChange={(e) => setClassCounter(e.target.value)} value={classCounter}/>

        </div>
        <button onClick={()=> handelAdd()}>Add a Student</button>
    </div>
  )
}

export default Add
