import React from 'react'
import firebase from "../firebase"
import {useState,useEffect} from 'react'
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
        items.push(doc.data());
      });
      setDoctor(items);
      setLoading(false);
    })
  }
  useEffect(()=>{
    getDoctors();
  },[]);
  

const [note,setNote] = useState('');
const onSubmit = ()=>{


  firebase.firestore().collection(user.email).doc().set({
   "note":note 
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    alert("Error writing document: ", error);
});
}

function deleteNote(id){
alert(id)
firebase.firestore().collection(user.email).doc().delete().then(() => {
  console.log("Document successfully deleted!");
}).catch((error) => {
  console.error("Error removing document: ", error);
});
}

  return (
   <div>

    <textarea onChange={(e)=>setNote(e.target.value)}></textarea>
    <button onClick={onSubmit}>submit</button>
    {
          doctor.map((doc)=>(
          <div>
           <p> {doc.note}</p>
          <button onClick={()=>{deleteNote()}} style={{border:"2px solid black"}}>Delete</button>
</div>
          ))}
   </div>
  );
}

export default Notes
