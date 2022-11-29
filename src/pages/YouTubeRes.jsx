import React from 'react'
import {useEffect,useState} from 'react'
import firebase from "../firebase"
function YouTubeRes() {

  const [syllabus,setSyllabus] = useState([]);
  const [loading,setLoading] = useState(false);
  const ref = firebase.firestore().collection("youtube_res_sem7");
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
       <h1>YouTube Resources</h1>
        {
          syllabus.map((doc)=>(
         <div>
          <center>

            <iframe style={{margin:"50px",borderRadius:"20px"}} src={doc.link} width={"80%"} height={1000}></iframe>
           
            </center>
           </div>

          
          ))}
  
            
     
    </div>
    )
}


export default YouTubeRes