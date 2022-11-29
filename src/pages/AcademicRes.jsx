import React, { useState,useEffect } from 'react'
import {db} from '../firebase'
import {collection, getDoc, getDocs} from 'firebase/firestore'
function AcademicRes() {
  const [users,setUsers] = useState()
  const usersCollectionRef = collection(db,"users");
  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    } 
  },[])
  return (
    <div>
      
        <iframe style={{margin:"5px",borderRadius:"20px"}} src="https://www.aminotes.com/" width={400} height={430}></iframe>
        <iframe style={{margin:"5px",borderRadius:"20px"}} src="https://www.brainkart.com/menu/computer-science-engineering/" width={400} height={430}></iframe>
        <iframe style={{margin:"5px",borderRadius:"20px"}}src="https://www.ktuqbank.com/p/ktu-btech-study-materials.html" width={400} height={430}></iframe>
    {console.log('yo')}
    </div>
  )
}

export default AcademicRes