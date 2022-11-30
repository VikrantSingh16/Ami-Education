import React from 'react'
import firebase from "../firebase"
import {collection, deleteDoc,doc, DocumentReference} from "firebase/firestore"
import {useState,useEffect} from 'react'
import './notes.scss'
function Notes() {
  
  const user = firebase.auth().currentUser;

  const [doctor,setDoctor] = useState([]);
  const [loading,setLoading] = useState(false);
  const ref = firebase.firestore().collection(user.email);
  function getDoctors(){
    setLoading(true);
    ref.onSnapshot((querySnapshot)=>{
      const items = [];
      querySnapshot.forEach((doc)=>{
        items.push([doc.data(),doc.id]);
        console.log("line" +doc);
      });
      setDoctor(items);
      setLoading(false);
    })
  }
  console.log(doctor)
  useEffect(()=>{
    getDoctors();
    console.log(doctor);
  },[]);
  

const [note,setNote] = useState('');
const onSubmit = ()=>{


  firebase.firestore().collection(user.email).doc().set({
   "note":note,
  

})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    alert("Error writing document: ", error);
});
}

function deleteNote(data){
console.log(data);
  firebase.firestore().collection(user.email).doc(data).delete().then(console.log('deleted')).catch(err=>alert(err))

}

  return (
   <div>

    
    <center>
    <textarea  placeholder="write here..."className="paper-shadow note" onChange={(e)=>setNote(e.target.value)}></textarea>
    
    </center>
    <center><button style={{marginTop:"10",marginBottom:"30px",marginTop:"20px",backgroundColor:"#E8A317",width:"100px",color:"white"}} onClick={onSubmit}>submit</button></center>
    <h3 style={{marginTop:"20px",marginBottom:"20px",fontWeight:"bolder",fontSize:"1.8rem"}}>Your notes..</h3>
    <div className='container'>
   
    {       
          doctor.map((doc)=>(
           
          <div className='boxn'>
           <div class="notes"> {doc[0].note}</div>
          
          <button style={{width:"60px",height:"40px",backgroundColor:"red",color:"white",borderRadius:"12px",padding:"5px" ,fontSize:"0.8rem",marginTop:"10%"}} onClick={()=>{deleteNote(doc[1])}}>Delete</button>
</div>
          ))}
    </div>
    
   
   </div>
  );
}

export default Notes
