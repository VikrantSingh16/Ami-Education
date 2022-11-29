import React, { useState,useEffect } from 'react'
import firebase from "../firebase"
function AcademicRes() {
  const [syllabus,setSyllabus] = useState([]);
  const [loading,setLoading] = useState(false);
  const ref = firebase.firestore().collection("syllabus");
  function getSyllabus(){
    setLoading(true);
    ref.onSnapshot((querySnapshot)=>{
      const syllabusItems = [];
      querySnapshot.forEach((doc)=>{
        syllabusItems.push(doc.data());
      });
      setSyllabus(syllabusItems);
      setLoading(false);
    })
  }
  useEffect(()=>{
    getSyllabus();
  },[]);
  if(loading){
    return <h1>Loading....</h1>
  }
  return (
    <div>
              <h1>Syllabus</h1>

        {
          syllabus.map((doc)=>(
         <div>
          <center>
          <h1>NLP</h1>
            <iframe style={{margin:"5px",borderRadius:"20px"}} src={doc.nlp} width={"80%"} height={1000}></iframe>
            <h1>Cyber Security</h1>
            <iframe style={{margin:"5px",borderRadius:"20px"}}src={doc.cyber_security} width={"80%"} height={1000}></iframe>
            <h1>Statistics</h1>

            <iframe style={{margin:"5px",borderRadius:"20px"}}src={doc.statistics} width={"80%"} height={1000}></iframe>
            <h1>Data Mining</h1>

            <iframe style={{margin:"5px",borderRadius:"20px"}}src={doc.data_mining} width={"80%"} height={1000}></iframe>
            <h1>Software Project Management</h1>

            <iframe style={{margin:"5px",borderRadius:"20px"}}src={doc.software_project_management} width={"80%"} height={1000}></iframe>

            </center>
           </div>

          
          ))}
  
            
     
    </div>
  )
}

export default AcademicRes